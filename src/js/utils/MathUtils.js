/** 
 * A set of math utility functions
 * 
 * @author Lachlan Charteris
 * @module js/utils/MathUtils
 */

import GameConstants from "../constants/GameConstants";

class MathUtils {
  /**
   * Convolves the input matrix by the kernel
   * @param {Array} matrix - The input array (expects 2D)
   * @param {Array} kernel  - The input kernel to convolve by
   * @param {Function} evaluationFunction - Evaluates the final values after each convolution
   * @returns {Array} The resultant array (same size as input)
   */
  static convolve(matrix, kernel = GameConstants.NEIGHBOURHOODS.MOORES.kernel, evaluationFunction = (value) => value) {
    const maxSize = matrix.length;
    const kernelSize = kernel.length;

    // Initialise new matrix with padding
    let newMatrix = Array(maxSize + 2).fill(0).map(() => Array(maxSize + 2).fill(0));
    matrix.forEach((row, rowIndex) => {
      row.forEach((cell, index) => {
        newMatrix[rowIndex + 1][index + 1] = cell;
      });
    });
    
    // Convolve new matrix with kernel to get result
    return Array(maxSize).fill(0).map((row, rowIndex) => {
      return Array(maxSize).fill(0).map((cell, index) => {
        // Accumulate kernel multiplication
        let value = 0;
        for (let n = 0; n < kernelSize; n ++) {
          for (let m = 0; m < kernelSize; m ++) {
            value += newMatrix[rowIndex + n][index + m] * kernel[n][m];
          }
        }

        return evaluationFunction(newMatrix[rowIndex + 1][index + 1], value);
      })
    });
  }
}

export default MathUtils;