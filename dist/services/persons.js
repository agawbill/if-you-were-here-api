"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonsServices = void 0;

class PersonsServices {
  constructor(personsModel) {
    this.personsModel = personsModel;
  }

  async findAll() {
    try {
      const persons = await this.personsModel.find({}).populate({
        path: "createdBy",
        model: "User",
        select: "email"
      }).populate({
        path: "modifiedBy",
        model: "User",
        select: "email"
      });
      return persons;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async findPersonById(personId) {
    try {
      const person = await this.personsModel.findById(personId).populate({
        path: "createdBy",
        model: "User",
        select: "email"
      }).populate({
        path: "modifiedBy",
        model: "User",
        select: "email"
      });
      return person;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async findPersonByPosition(position) {
    try {
      const person = await this.personsModel.findOne({
        position
      });
      return person;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async addPerson(person) {
    try {
      const position = (await this.personsModel.countDocuments({})) + 1;
      const newPerson = await this.personsModel.create({ ...person,
        position
      });
      return newPerson;
    } catch (err) {
      console.log(err);
      throw new Exception(err);
    }
  }

  async updatePerson(personId, body) {
    try {
      const updatedPerson = await this.personsModel.findOneAndUpdate({
        _id: personId
      }, body, {
        new: true
      }).populate({
        path: "createdBy",
        model: "User",
        select: "email"
      }).populate({
        path: "modifiedBy",
        model: "User",
        select: "email"
      });
      return updatedPerson;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async patchPerson(personId, body) {
    try {
      const updatedPerson = await this.personsModel.findOneAndUpdate({
        _id: personId
      }, body, {
        new: true
      }).populate({
        path: "createdBy",
        model: "User",
        select: "email"
      }).populate({
        path: "modifiedBy",
        model: "User",
        select: "email"
      });
      return updatedPerson;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async removePerson(personId) {
    try {
      const removedPerson = await this.personsModel.findOneAndRemove({
        _id: personId
      });
      return removedPerson;
    } catch (err) {
      throw new Exception(err);
    }
  }

  personValidation(name) {
    if (name.length === 0) {
      return {
        success: false,
        message: "All fields must be filled out."
      };
    }

    return {
      success: true,
      message: null
    };
  }

}

exports.PersonsServices = PersonsServices;