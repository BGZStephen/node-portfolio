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
  imageUrl = '';
  imageCaption = '';
  text = '';

  toggleType() {
    console.log('working')
    this.type = this.type === 'text' ? 'image' : 'text';
    console.log(this.type)
  }
}

export class WorkExampleContentEditor {
  constructor (
    private apiService,
    private notification,
    private workExample,
  ) {
    this.apiService = apiService
    this.notification = notification
    this.workExample = workExample
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
    for (let section of this.workExample.content) {
      for (let column in section.columns) {
        section.columns[column] = new Column(column);
      }
    }
  }

  addSection() {
    this.workExample.content.push({
      option: 'One Column',
      slug: 'oneColumn',
      columnClass: 'col-12',
      columns: [new Column()]
    });
  }

  removeSection(sectionIndex) {
    this.workExample.content.splice(sectionIndex, 1);
  }

  updateSection(newSectionType, sectionIndex) {
    for (const sectionType of this.sectionTypes) {
      if (sectionType.option === newSectionType) {
        this.workExample.content[sectionIndex].columns = _.clone(sectionType.columns);
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
      this.notification.success({
        message: 'Upload successful',
      });
    });
  }
}
