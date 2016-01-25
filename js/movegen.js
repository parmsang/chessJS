function MOVE(from, to, captured, promoted, flag) {
  return (from | (to << 7) | (captured << 14) | (promoted << 20) | flag);
}

function GenerateMoves() {

  GameBoard.moveListStart[GameBoard.ply+1] = GameBoard.moveListStart[GameBoard.ply];

  var pceType;
  var pceNum;
  var sq;

  if(GameBoard.side == COLOURS.WHITE) {
    pceType = PIECES.wP;

    for(pceNum = 0; pceNum < GameBoard.pceNum[pceType]; ++pceType) {
      sq = GameBoard.pList[PCEINDEX(pceType, pceNum)];

      if(GameBoard.pece[sq+10] == PICES.EMPTY) {
        // add pawn move
        if(RanksBrd[sq] == RANKS.RANK_2 && GameBoard.pieces[sq + 20] == PIECES.EMPTY) {
          // Add quiet move
        }
      }
      if(SQOFFBOARD(sq + 9) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq+9]] == COLOURS.BLACK) {
        // add pawn cap move
      }

      if(SQOFFBOARD(sq + 9) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq+11]] == COLOURS.BLACK) {
        // add pawn cap move
      }
      if (GameBoard.enPas != SQUARES.NOSQ) {
        if(sq +9 == GameBoard.enPas) {
          // add en passsant move
        }
        if(sq +11 == GameBoard.enPas) {
          // add en passsant move
        }
      }
    }

    pceType = PIECE.wN;
    } else {
      pceType = PIECES.bP;

          for(pceNum = 0; pceNum < GameBoard.pceNum[pceType]; ++pceType) {
            sq = GameBoard.pList[PCEINDEX(pceType, pceNum)];

            if(GameBoard.pece[sq-10] == PICES.EMPTY) {
              // add pawn move
              if(RanksBrd[sq] == RANKS.RANK_2 && GameBoard.pieces[sq - 20] == PIECES.EMPTY) {
                // Add quiet move
              }
            }
            if(SQOFFBOARD(sq - 9) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq-9]] == COLOURS.WHITE) {
              // add pawn cap move
            }

            if(SQOFFBOARD(sq - 11) == BOOL.FALSE && PieceCol[GameBoard.pieces[sq-11]] == COLOURS.WHITE) {
              // add pawn cap move
            }
            if (GameBoard.enPas != SQUARES.NOSQ) {
              if(sq - 9 == GameBoard.enPas) {
                // add en passsant move
              }
              if(sq - 11 == GameBoard.enPas) {
                // add en passsant move
              }
            }
          }

      pceType = PIECE.bN;
  }

}
