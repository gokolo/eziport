export class SendSearchRequest {
    constructor(
        public from: string,
        public to: string,
        public by: string,
        public toAddress: string,
        public weight: string,
        public title: string,
        public detail: string
      ) {  }
}
