import mongoose from "mongoose";

interface ClientAttrs {
  name: string;
  email: string;
  phone: string;
}

interface ClientModel extends mongoose.Model<ClientDoc> {
  build(attrs: ClientAttrs): ClientDoc;
}

interface ClientDoc extends mongoose.Document {
  name: string;
  email: string;
  phone: string;
}

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
});

ClientSchema.statics.build = (attrs: ClientAttrs) => {
  return new Client(attrs);
};

const Client = mongoose.model<ClientDoc, ClientModel>("Client", ClientSchema);

export { Client };
