import { handleGameTick} from "./exercise";
import {startMatrixApplication} from "node-cli-character-matrix";

const N_ROWS = 10; 
const N_COLUMNS=10;
const INTERVAL_MS=100; 

startMatrixApplication(N_ROWS, N_COLUMNS, INTERVAL_MS, handleGameTick); 