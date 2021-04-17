const Person = require('../models/person');

exports.index = async (request, response, next) => {
  try {
    const people = await Person.find();

    response.status(200)
    .json(people);
  } catch (error) {
    next(error);
  }
};

exports.create = async (request, response, next) => {
  try {
    const { name } = request.body;
    const people = await Person.create({
      name
    });

    response.status(200)
    .json({
      message: "Person was created successfully",
      status: "success",
      people
    });
  } catch (error) {
    next(error);
  }
};

exports.show = async (request, response, next) => {
  try {
    const { id } = request.params;
    const people = await Person.findById(id);
    const traits = await people.getTraits();

    response.status(200)
    .json({...people._doc, traits });
  } catch (error) {
    next(error);
  }
};

exports.update = async (request, response, next) => {
  try {
    const { id, name } = request.body;

    await Person.findOneAndUpdate({ _id: id }, { name });
    const people = await Person.findByID(id);

    response.status(200)
    .json({
      message: "Genre was updated successfully",
      status: "success",
      people
    });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (request, response, next) => {
  try {
    const { id } = request.body;

    await Person.findOneAndDelete({ _id: id });

    response.status(200)
    .json({
      message: "Genre was deleted successfully",
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};
