import { API_URI } from "@/Utils/variables";
import PocketBase from "pocketbase";

const pb = new PocketBase(API_URI);

export default pb;
