export class TransferRequest {
    constructor(
        public id: number,
        public on: string,
        public weight: number,
        public from: string,
        public  to: string
      ) {  }
}
