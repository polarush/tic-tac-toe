class TicTacToe {
	constructor() {
	
		this.matrix = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];
	
		this.isWinner = null;	
		this.currentPlayer = 'x';	
	}

    getCurrentPlayerSymbol() {
			return this.currentPlayer;
    }

	nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
			this.matrix[rowIndex][columnIndex] = this.currentPlayer;
			if (this.currentPlayer === 'o') {
				return this.currentPlayer = 'x'
			} 
				return this.currentPlayer = 'o';
		    } 
        return this.currentPlayer;
		
	}

    isFinished() {
		if (this.isDraw() === true || this.getWinner() !== null) {
			return true;
		} 
		
        return false;
			
    }

	getWinner() {
		if ((this.matrix[0][0] === this.matrix[1][1]) && (this.matrix[0][0] === this.matrix[2][2]))  {
			this.isWinner = this.matrix[0][0]; // первая линия
			return this.isWinner;
		} else if ((this.matrix[0][2] === this.matrix[2][0]) && (this.matrix[0][2] === this.matrix[1][1]))  {
			this.isWinner = this.matrix[0][2]; // обратная диагональ
			return this.isWinner;
		}

		else if ((this.matrix[0][0] === this.matrix[1][0]) && (this.matrix[0][0] === this.matrix[2][0]))  {
			this.isWinner = this.matrix[0][0]; // проверка на первый столбец
			return this.isWinner;
		}

		else if ((this.matrix[0][1] === this.matrix[1][1]) && (this.matrix[0][1] === this.matrix[2][1]))  {
			this.isWinner = this.matrix[0][1]; // проверка на второй столбец
			return this.isWinner;
		}

		else if ((this.matrix[0][2] === this.matrix[1][2]) && (this.matrix[0][2] === this.matrix[2][2]))  {
			this.isWinner = this.matrix[0][2]; // проверка на третий столбец
			return this.isWinner;
		}

		else if ((this.matrix[0][0] === this.matrix[0][1]) && (this.matrix[0][0] === this.matrix[0][2]))  {
			this.isWinner = this.matrix[0][1]; // проверка на первую линию
			return this.isWinner;
		}

		else if ((this.matrix[1][0] === this.matrix[1][1]) && (this.matrix[1][0] === this.matrix[1][2]))  {
			this.isWinner = this.matrix[1][1]; // проверка на вторую линию
			return this.isWinner;
		}

		else if ((this.matrix[2][0] === this.matrix[2][1]) && (this.matrix[2][0] === this.matrix[2][2]))  {
			this.isWinner = this.matrix[2][1]; // проверка на третью линию
			return this.isWinner;
		}


		return this.isWinner;
	}
	noMoreTurns() {
		for (let i = 0; i < this.matrix.length; i++) {
			if (this.matrix.some((item) => item[i] === null)) {
				return false;
			} 
		}
		return true;
	}

	isDraw() {
		if (this.getWinner() === null && this.noMoreTurns() === true) {
			return true;
		} 
				
        return false;
			
	}

	getFieldValue(rowIndex, colIndex) {
		return this.matrix[rowIndex][colIndex];
	}
}

module.exports = TicTacToe;