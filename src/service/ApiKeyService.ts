import { v4 as uuidv4 } from 'uuid';
import { ApiKey } from '../entity/ApiKey';
import { AppDataSource } from '../data-source';
import { IsNull } from 'typeorm';

const apiKeyRepository = AppDataSource.getRepository(ApiKey);

export class ApiKeyService {
  static async generateKey(clientName: string): Promise<ApiKey> {
    const apiKey = new ApiKey();
    apiKey.key = uuidv4();
    apiKey.clientName = clientName;
    return await apiKeyRepository.save(apiKey);
  }

  static async revokeKey(key: string): Promise<ApiKey | null> {
    const apiKey = await apiKeyRepository.findOneBy({ key });
    if (apiKey) {
      apiKey.revokedAt = new Date();
      return await apiKeyRepository.save(apiKey);
    }
    return null;
  }

  static async validateKey(key: string): Promise<boolean> {
    const apiKey = await apiKeyRepository.findOneBy({ key, revokedAt: undefined });
    return !!apiKey;
  }
}
