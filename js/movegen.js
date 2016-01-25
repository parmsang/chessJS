
function MOVE(from, to, captured, promoted, flag) {
	return (from | (to << 7) | (captured << 14) | (promoted << 20) | flag);
}

function GenerateMoves() {
	GameBoard.moveListStart[GameBoard.ply+1] = GameBoard.moveListStart[GameBoard.ply];

	var pceType;
	var pceNum;
	var sq;
	var pceIndex;
	var pce;
	var t_sq;

	if(GameBoard.side == COLOURS.WHITE) {
		pceType = PIECES.wP;

		for(pceNum = 0; pceNum < GameBoard.pceNum[pceType]; ++pceType) {
			sq = GameBoard.pList[PCEINDEX(pceType, pceNum)];

			if(GameBoard.pieces[sq + 10] == PIECES.EMPTY) {
				// Add Pawn Move Here
				if(RanksBrd[sq] == RANKS.RANK_2 && GameBoard.pieces[sq + 20] == PIECES.EMPTY) {
					// Add Quiet Move Here
				}
			}

			if(SQOFFBOARD(sq + 9) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq+9]] == COLOURS.BLACK) {
				// Add Pawn Cap Move
			}

			if(SQOFFBOARD(sq + 11) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq+11]] == COLOURS.BLACK) {
				// Add Pawn Cap Move
			}

			if(GameBoard.enPas != SQUARES.NOSQ) {
				if(sq + 9 == GameBoard.enPas) {
					// Add enPas Move
				}

				if(sq + 11 == GameBoard.enPas) {
					// Add enPas Move
				}
			}

		}

		if(GameBoard.castlePerm & CASTLEBIT.WKCA) {
			if(GameBoard.pieces[SQUARES.F1] == PIECES.EMTPY && GameBoard.pieces[SQUARES.G1] == PIECES.EMTPY) {
				if(SqAttacked(SQUARES.F1, COLOURS.BLACK) == BOOL.FALSE && SqAttacked(SQUARES.E1, COLOURS.BLACK) == BOOL.FALSE) {
					// Add Quiet Move
				}
			}
		}

		if(GameBoard.castlePerm & CASTLEBIT.WQCA) {
			if(GameBoard.pieces[SQUARES.D1] == PIECES.EMTPY && GameBoard.pieces[SQUARES.C1] == PIECES.EMTPY
					 && GameBoard.pieces[SQUARES.B1] == PIECES.EMTPY) {
				if(SqAttacked(SQUARES.D1, COLOURS.BLACK) == BOOL.FALSE && SqAttacked(SQUARES.E1, COLOURS.BLACK) == BOOL.FALSE) {
					// Add Quiet Move
				}
			}
		}

	} else {
		pceType = PIECES.bP;

		for(pceNum = 0; pceNum < GameBoard.pceNum[pceType]; ++pceType) {
			sq = GameBoard.pList[PCEINDEX(pceType, pceNum)];

			if(GameBoard.piece[sq - 10] == PIECES.EMPTY) {
				// Add Pawn Move Here
				if(RanksBrd[sq] == RANKS.RANK_7 && GameBoard.pieces[sq - 20] == PIECES.EMPTY) {
					// Add Quiet Move Here
				}
			}

			if(SQOFFBOARD(sq - 9) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq-9]] == COLOURS.WHITE) {
				// Add Pawn Cap Move
			}

			if(SQOFFBOARD(sq - 11) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq-11]] == COLOURS.WHITE) {
				// Add Pawn Cap Move
			}

			if(GameBoard.enPas != SQUARES.NOSQ) {
				if(sq - 9 == GameBoard.enPas) {
					// Add enPas Move
				}

				if(sq - 11 == GameBoard.enPas) {
					// Add enPas Move
				}
			}
		}
		if(GameBoard.castlePerm & CASTLEBIT.BKCA) {
			if(GameBoard.pieces[SQUARES.F8] == PIECES.EMTPY && GameBoard.pieces[SQUARES.G8] == PIECES.EMTPY) {
				if(SqAttacked(SQUARES.F8, COLOURS.WHITE) == BOOL.FALSE && SqAttacked(SQUARES.E8, COLOURS.WHITE) == BOOL.FALSE) {
					// Add Quiet Move
				}
			}
		}

		if(GameBoard.castlePerm & CASTLEBIT.BQCA) {
			if(GameBoard.pieces[SQUARES.D8] == PIECES.EMTPY && GameBoard.pieces[SQUARES.C8] == PIECES.EMTPY
					 && GameBoard.pieces[SQUARES.B8] == PIECES.EMTPY) {
				if(SqAttacked(SQUARES.D8, COLOURS.WHITE) == BOOL.FALSE && SqAttacked(SQUARES.E8, COLOURS.WHITE) == BOOL.FALSE) {
					// Add Quiet Move
				}
			}
		}
	}

	// get pce for side wN, wK
	// loop all dir for pce -> need to know num dir for pce

}
