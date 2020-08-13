import { ResourcesServices } from "../services/resources.js";
import ResourceModel from "../models/Resource.js";

const resourcesServiceInstance = new ResourcesServices(ResourceModel);

export const resourcesController = {
  async all(req, res, next) {
    try {
      const resources = await resourcesServiceInstance.findAll();
      res.status(200).json({ success: true, data: resources });
    } catch (err) {
      res.status(500).json({ success: false, data: err });
      next(err);
    }
  },
  async byId(req, res, next) {
    try {
      const { id } = req.params;
      const resource = await resourcesServiceInstance.findResource(id);
      res.status(200).json({ success: true, data: resource });
    } catch (err) {
      res.status(500).json({ success: false, data: err });
      next(err);
    }
  },
  async create(req, res, next) {
    try {
      const { title, description, url, createdBy } = req.body;
      const validated = resourcesServiceInstance.resourceValidations({
        title,
        description,
        url,
      });
      if (!validated.success) {
        return res
          .status(400)
          .json({ success: false, data: validated.message });
      }
      const newResource = await resourcesServiceInstance.addResource({
        title,
        description,
        url,
        createdBy,
      });
      res.status(200).json({ success: true, data: newResource });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
  async update(req, res, next) {
    try {
      const body = { ...req.body };
      const validated = resourcesServiceInstance.resourceValidations(body);
      if (!validated.success) {
        return res
          .status(400)
          .json({ success: false, data: validated.message });
      }
      const updatedResource = await resourcesServiceInstance.updateResource(
        body
      );
      res.status(200).json({ success: true, data: updatedResource });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
  async patch(req, res, next) {
    try {
      const { id } = req.params;
      const body = { ...req.body };
      const validated = resourcesServiceInstance.resourceValidations(body);
      if (!validated.success) {
        return res
          .status(400)
          .json({ success: false, data: validated.message });
      }
      const patchedResource = await messagesServiceInstance.patchMessage(
        id,
        body
      );
      res.status(200).json({ success: true, data: patchedResource });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedResource = await resourcesServiceInstance.removeResource(id);
      res.status(200).json({ success: true, data: deletedResource });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
};
