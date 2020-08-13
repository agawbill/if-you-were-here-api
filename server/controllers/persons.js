import { PersonsServices } from "../services/persons.js";
import PersonModel from "../models/Person.js";

const personsServiceInstance = new PersonsServices(PersonModel);

export const personsController = {
  async all(req, res, next) {
    try {
      const persons = await personsServiceInstance.findAll();
      res.status(200).json({ success: true, data: persons });
    } catch (err) {
      res.status(500).json({ success: false, data: err });
      next(err);
    }
  },
  async byId(req, res, next) {
    try {
      const { id } = req.params;
      const person = await personsServiceInstance.findPersonById(id);
      res.status(200).json({ success: true, data: person });
    } catch (err) {
      res.status(500).json({ success: false, data: err });
      next(err);
    }
  },
  async byPosition(req, res, next) {
    try {
      const { position } = req.params;
      const person = await personsServiceInstance.findPersonByPosition(
        position
      );
      res.status(200).json({ success: true, data: person });
    } catch (err) {
      res.status(500).json({ success: false, data: err });
      next(err);
    }
  },
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const validated = personsServiceInstance.personValidation(name);
      if (!validated.success) {
        return res
          .status(400)
          .json({ success: false, data: validated.message });
      }
      const newPerson = await personsServiceInstance.addPerson(req.body);
      res.status(200).json({ success: true, data: newPerson });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, position, modifiedBy } = req.body;
      const body = { name, position, modifiedBy };
      const validated = personsServiceInstance.personValidation(name);
      if (!validated.success) {
        return res
          .status(400)
          .json({ success: false, data: validated.message });
      }
      const updatedPerson = await personsServiceInstance.updatePerson(id, body);
      res.status(200).json({ success: true, data: updatedPerson });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
  async patch(req, res, next) {
    try {
      const { id, position, modifiedBy } = req.body;
      const updatedPerson = await personsServiceInstance.patchPerson(id, {
        position,
        modifiedBy,
      });
      res.status(200).json({ success: true, data: updatedPerson });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedPerson = await personsServiceInstance.removePerson(id);
      res.status(200).json({ success: true, data: deletedPerson });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
};
