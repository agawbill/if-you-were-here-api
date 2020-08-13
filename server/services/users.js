export class UserServices {
  constructor(userModel) {
    this.userModel = userModel;
  }
  async findAll() {
    try {
      return await this.userModel
        .find({}, "-password")
        .populate({ path: "createdBy", model: "User", select: "email" })
        .populate({ path: "modifiedBy", model: "User", select: "email" });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
  async findUserById(userId) {
    try {
      return await this.userModel
        .findById(userId, "-password")
        .populate({ path: "createdBy", model: "User", select: "email" })
        .populate({ path: "modifiedBy", model: "User", select: "email" });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
  async findUserByEmail(email) {
    try {
      return await this.userModel.findOne({ email });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
  async findSubscribedUsers() {
    try {
      return await this.userModel.find({ notifications: true });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
  async getUserByProviderId(providerId) {
    try {
      return await this.userModel.findOne({ providerId });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
  async createUser(body) {
    const { email } = body;
    return new Promise(async (resolve, reject) => {
      const existingUser = await this.findUserByEmail(email);
      if (existingUser) {
        return reject("Email is already in use");
      }
      return resolve(await this.userModel.create(body));
    });
  }
  async updateUser(userId, body) {
    try {
      return await this.userModel
        .findOneAndUpdate({ _id: userId }, body, { new: true })
        .populate({ path: "createdBy", model: "User", select: "email" })
        .populate({ path: "modifiedBy", model: "User", select: "email" })
        .select(["-password"]);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
  async patchUser(userId, body) {
    try {
      const updatedUser = await this.userModel.findOneAndUpdate(
        { _id: userId },
        body,
        { new: true }
      );
      return updatedUser;
    } catch (err) {
      throw new Exception(err);
    }
  }
  async deleteUser(userId) {
    try {
      return await this.userModel.findOneAndRemove({
        _id: userId,
      });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  emailValidations(email) {
    const regex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "i"
    );

    if (email.length === 0) {
      return { success: false, message: "All fields must be filled out." };
    }

    if (!email.match(regex)) {
      return { success: false, message: "A valid email must be used." };
    }

    return { success: true, message: null };
  }
}
