import * as _ from 'lodash';

class Column {
  constructor(column?) {
    if(column) {
      this.type = column.type || ''
      this.imageUrl = column.imageUrl || '',
      this.imageCaption = column.imageCaption || '',
      this.text = column.text || ''
    }
  }

  type = 'text';
  imageUrl = null;
  imageCaption = null;
  text = null;

  toggleType() {
    this.type = this.type === 'text' ? 'image' : 'text';
  }
}

export class WorkExampleContentEditor {
  constructor (
    private apiService,
    private notification,
    private workExample?,
  ) {
    this.apiService = apiService
    this.notification = notification
    this.workExample = workExample || {}
  }

  sectionTypes = [
    {
      option: 'One Column',
      slug: 'oneColumn',
      columns: [new Column()]
    },
    {
      option: 'Two Column',
      slug: 'twoColumn',
      columns: [new Column(), new Column()]
    },
    {
      option: 'Three Column',
      slug: 'threeColumn',
      columns: [new Column(), new Column(), new Column()]
    }
  ]

  initialise() {
    if (this.workExample.content.length > 0) {
      this.instanciateColumns()
    }
  }

  instanciateColumns() {
    for(let i = 0; i < this.workExample.content.length; i+= 1) {
      for(let j = 0; j < this.workExample.content[i].columns.length; j += 1) {
        this.workExample.content[i].columns[j] = new Column(this.workExample.content[i].columns[j]);
      }
    }
  }

  addSection() {
    if(!this.workExample.content) {
      this.workExample.content = []
    };
    this.workExample.content.push(_.cloneDeep(this.sectionTypes[0]));
  }

  removeSection(sectionIndex) {
    this.workExample.content.splice(sectionIndex, sectionIndex + 1);
  }

  updateSection(newSectionType, sectionIndex) {
    for (const sectionType of this.sectionTypes) {
      if (sectionType.option === newSectionType) {
        this.workExample.content[sectionIndex].columns = _.cloneDeep(sectionType.columns);
      }
    }
  }

  generateSectionIndex() {
    if (this.workExample.content.length === 0) {
      return 1;
    }

    if (this.workExample.content.length === 1) {
      return 2;
    }

    const largestIndex = this.workExample.content.reduce(function (a, b) {
      return a.id > b.id ? a.id : b.id;
    });

    return largestIndex + 1;
  }

  insertImage(imageUrl, sectionIndex, columnIndex) {
    this.workExample.content[sectionIndex].columns[columnIndex].imageUrl = imageUrl;
    return this.save();
  }

  save() {
    this.apiService.updateWorkExample(this.workExample)
    .subscribe(workExample => {
      this.workExample = workExample;
      this.instanciateColumns()
      this.notification.success({
        message: 'Upload successful',
      });
    });
  }
}
