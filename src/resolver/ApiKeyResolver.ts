import { ApiKeyService } from '../service/ApiKeyService';

export const ApiKeyResolver = {
  Mutation: {
    generateApiKey: async (_: any, args: { clientName: string }) => {
      return await ApiKeyService.generateKey(args.clientName);
    },
    revokeApiKey: async (_: any, args: { key: string }) => {
      return await ApiKeyService.revokeKey(args.key);
    },
  },
};
