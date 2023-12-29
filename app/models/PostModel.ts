import { Document, Model } from "mongoose";
import * as Mongoose from "mongoose";

const postSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  checkin: {
    type: Date,
    required: true,
  },
  checkout: {
    type: Date,
    required: true,
  },
});

interface IPost {
  name: string;
  room: string;
  checkin: Date;
  checkout: Date;
}

interface IPostDocument extends IPost, Document {}
interface IPostModel extends Model<IPostDocument> {}

// const PostModel: IPostModel = Mongoose.model<IPostDocument>("post", postSchema);

const PostModel: IPostModel =
  Mongoose.models.post || Mongoose.model<IPostDocument>("post", postSchema);

export default PostModel;
