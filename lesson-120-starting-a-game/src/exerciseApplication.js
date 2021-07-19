import { handleGameTick,  N_ROWS, N_COLUMNS} from "./exercise";
import {startMatrixApplication} from "node-cli-character-matrix";


const INTERVAL_MS=100; 

startMatrixApplication(N_ROWS, N_COLUMNS, INTERVAL_MS, handleGameTick); 