import { Document } from 'mongoose';
import { TechnologyDocument } from '.'

export interface TechnologyModel extends TechnologyDocument, Document {}