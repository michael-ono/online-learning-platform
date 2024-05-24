const courseSchema = new mongoose.Schema({
    courseID: {
        type: mongoose.Types.ObjectId,
        required: [true, 'first name is required'],
        unique: true
    },
    courseName: {
        type: String,
        required: [true, 'course name is required']
    },
    category: {
        type: String,
        required: [true, 'category is required']
    },
    price: {
        type: String,
        required: [true, 'price is required']
    },
  });
  
  module.exports = mongoose.model('Course', courseSchema);