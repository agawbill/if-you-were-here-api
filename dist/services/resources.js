"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourcesServices = void 0;

class ResourcesServices {
  constructor(resourcesModel) {
    this.resourcesModel = resourcesModel;
  }

  async findAll() {
    try {
      const resources = await this.resourcesModel.find({}).populate({
        path: "createdBy",
        model: "User",
        select: "email"
      }).populate({
        path: "modifiedBy",
        model: "User",
        select: "email"
      });
      return resources;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async findResource(resourceId) {
    try {
      const resource = await this.resourcesModel.findById(resourceId).populate({
        path: "createdBy",
        model: "User",
        select: "email"
      }).populate({
        path: "modifiedBy",
        model: "User",
        select: "email"
      });
      return resource;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async addResource(resource) {
    try {
      const newResource = await this.resourcesModel.create(resource);
      return newResource;
    } catch (err) {
      console.log(err);
      throw new Exception(err);
    }
  }

  async updateResource(body) {
    try {
      const {
        id
      } = body;
      const updatedResource = await this.resourcesModel.findOneAndUpdate({
        _id: id
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
      return updatedResource;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async patchResource(resourceId, body) {
    try {
      const updatedResource = await this.resourcesModel.findOneAndUpdate({
        _id: resourceId
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
      return updatedResource;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async removeResource(resourceId) {
    try {
      const removedResource = await this.resourcesModel.findOneAndRemove({
        _id: resourceId
      });
      return removedResource;
    } catch (err) {
      throw new Exception(err);
    }
  }

  resourceValidations(body) {
    const {
      url,
      title,
      description
    } = body;
    const regex = new RegExp("(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");

    if (url.length === 0 || title.length === 0 || description.length === 0) {
      return {
        success: false,
        message: "All fields must be filled out."
      };
    }

    if (!url.match(regex)) {
      return {
        success: false,
        message: "A valid URL must be used."
      };
    }

    return {
      success: true,
      message: null
    };
  }

}

exports.ResourcesServices = ResourcesServices;