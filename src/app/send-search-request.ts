export class SendSearchRequest {
    constructor(
        public from: string,
        public to: string,
        public by: string,
        public toAddress,
        public weight
      ) {  }
}
