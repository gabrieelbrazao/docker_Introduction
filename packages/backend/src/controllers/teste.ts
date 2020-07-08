export class TesteController {
  teste(): IMessage {
    return { message: "Hello World" };
  }
}

interface IMessage {
  message: string;
}
