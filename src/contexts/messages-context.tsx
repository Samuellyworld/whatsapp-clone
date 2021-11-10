import { createContext } from "react";


const MessageContext = createContext<Array<string>|undefined>(undefined);

export default MessageContext;