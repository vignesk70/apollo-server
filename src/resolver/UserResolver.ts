import { User } from '../entity/User';
import { AppDataSource } from '../data-source';

const userRepository = AppDataSource.getRepository(User);

export const UserResolver = {
  Query: {
    users: async () => {
      return await userRepository.find();
    },
    user: async (_: any, args: { id: number }) => {
      return await userRepository.findOneBy({ id: args.id });
    }
  },
  Mutation: {
    createUser: async (_: any, args: { name: string; email: string }) => {
      const newUser = userRepository.create(args);
      await userRepository.save(newUser);
      return newUser;
    }
  }
};
