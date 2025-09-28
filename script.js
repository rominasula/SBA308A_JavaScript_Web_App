import { fetchStatusData } from './api.js';
import { updateImage, updateJSONOutput, showError } from './ui.js';

const button = document.getElementById('checkBtn');
const input = document.getElementById('statusInput');