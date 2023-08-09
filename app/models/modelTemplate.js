import mongoose from 'mongoose';

// const templateSchema = new mongoose.Schema({
//   username: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['user', 'admin'], default: 'user' },
// });

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  // Add other user-related fields as needed
});

module.exports = mongoose.model('User', userSchema);

// Project.js

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  // Add other project-related fields as needed
});

// module.exports = mongoose.model('Project', projectSchema);

// Task.js
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Add other task-related fields as needed
});

module.exports = mongoose.model('Task', taskSchema);

templateSchema.method({
  saveData: async function () {
    return this.save();
  },
});

templateSchema.static({
  findData: function (findObj) {
    return this.find(findObj);
  },

  findOneData: function (findObj) {
    return this.findOne(findObj);
  },

  findOneAndUpdateData: function (findObj, updateObj) {
    return this.findOneAndUpdate(findObj, updateObj, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
  },

  findDataWithAggregate: function (findObj) {
    return this.aggregate(findObj);
  },
});

export default mongoose.model('Project', templateSchema);
