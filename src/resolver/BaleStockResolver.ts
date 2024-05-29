import { BaleStock, BaleTransactions } from '../entity/BaleStock';
import { AppDataSource } from '../data-source';

const balestocksRepository = AppDataSource.getRepository(BaleStock);
const baletransactionRepository =  AppDataSource.getRepository(BaleTransactions);

export const BaleStockResolver = {
  Query: {
    balestocks: async () => {
      return await balestocksRepository.find();
    },
    balestockdate: async (_: any, args: { stockdate: Date , entity:string, millname: string}) => {
        return await balestocksRepository.findBy({ stockdate: args.stockdate });
      },
    baleassigned: async (_: any, args: { dateassigned: Date , entity: string}) => {
      // console.log(Date.parse(args.dateassigned.toString())/1000)
      return await baletransactionRepository.findBy({ dateassigned: args.dateassigned, entity:args.entity })
    }
  },
  Mutation: {
    addstock: async (_: any, args: { millname: string, entity:string, stockdate:Date, stockqty:number }) => {
      const newBaleStock = balestocksRepository.create(args);
      await balestocksRepository.save(newBaleStock);
      return newBaleStock;
    },
    addtransaction: async(_:any,args:{millname: string, entity:string, dateassigned:Date, qtyassigned:number}) => {
        const newTrx = baletransactionRepository.create(args);
        await baletransactionRepository.save(newTrx)
        return newTrx
    }
    
  }
};
