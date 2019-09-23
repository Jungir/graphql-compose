import { prop, Typegoose, ModelType, InstanceType, staticMethod } from 'typegoose';

class User extends Typegoose {
  @prop()
  name?: string;
  
  @staticMethod
  static findByName(this: ModelType<User>, name: string){
      return this.findOne({name});
  }
}

export const UserModel = new User().getModelForClass(User);

//seed the data
export async function seedTheDB(){
    const u = new UserModel({
        name: "Kamil"
    });
    await u.save();
    const user = await UserModel.findByName('Kamil');
    console.log(user);
};

