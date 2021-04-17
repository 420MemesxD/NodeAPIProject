const Traits = require('../models/Traits');

exports.index = async (request, response, next) => {
  try{
    const traits = await Traits.find().populate('people');

    response.status(200)
    .json(traits);
  } catch (error) {
  next(error);
  }
};

exports.show = async (request, response, next) => {
  try{
    const { id } = request.params;

    const traits = await Traits.findById(id).populate('people');

    response.status(200)
    .json(traits);
  } catch (error) {
  next(error);
  }
};

exports.create = async (request, response, next) => {
  try{
    const {
      weight,
      height,
      birthday,
      name
    } = request.body;

    const traits = await Traits.create({
      weight,
      height,
      birthday,
      name
    });

    response.status(200).json({
      message: "Traits was created successfully",
      status: "success",
      traits
    });
  } catch (error) {
  next(error);
  }
};

exports.update = async (request, response, next) => {
  try{
    const {
      id,
      weight,
      height,
      birthday,
      name
    } = request.body;

    await Traits.findOneAndUpdate({ _id: id }, {
      id,
      weight,
      height,
      birthday,
      name
    });

    const traits = await Traits.findById(id);

    response.status(200).json({
      message: "Traits was updated successfully",
      status: "success",
      traits
    });
  } catch (error) {
  next(error);
  }
};

exports.destroy = async (request, response, next) => {
  try{
    const { id } = request.body;

    await Traits.findOneAndDelete({ _id: id });

    response.status(200).json({
      message: "traits were deleted successfully",
      status: "success"
    });
  } catch (error) {
  next(error);
  }
};
