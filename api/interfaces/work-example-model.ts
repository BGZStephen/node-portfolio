import { Document } from 'mongoose';
import { WorkExampleDocument } from '.'

export interface WorkExampleModel extends WorkExampleDocument, Document {}