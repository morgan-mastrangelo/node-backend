import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    read: boolean;
    name: string;
    comment: string;
    email: string;
    date?: Date | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    read: boolean;
    name: string;
    comment: string;
    email: string;
    date?: Date | undefined;
}> & Omit<{
    read: boolean;
    name: string;
    comment: string;
    email: string;
    date?: Date | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    read: boolean;
    name: string;
    comment: string;
    email: string;
    date?: Date | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    read: boolean;
    name: string;
    comment: string;
    email: string;
    date?: Date | undefined;
}>> & Omit<mongoose.FlatRecord<{
    read: boolean;
    name: string;
    comment: string;
    email: string;
    date?: Date | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default _default;
