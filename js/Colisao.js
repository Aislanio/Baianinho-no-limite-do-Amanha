function block(r1,r2){

  //r1 -> bloqueados
  //r2 -> parede
  //catetos

  let  catX = r1.centerX(); -r2.centerX();
  let  catY = r2.centerY() - r2.centerY();
  //Soma das metades
  let sumHalfWidht  = r1.halfWidth() + r2.halfWidth();
  let sumHalfHeigth = r1.halfHeight() + r2.halfHeight();

  if(Math.abs(catX)< sumHalfWidht && Math.abs(caty) < sumHalfHeigth){
    let overlapX = sumHalfWidht - Math.abs(catX);
    let overlapY = sumHalfHeigth - Math.abs(catY);

    if(overlapX >= overlapY){//colisao por cima ou por baixo
      if(caty  > 0){//por  cima
        r1.y += overlapY;
      }else{
        r1.y -= overlapy;
      }

    }else {//colisao pela esquerda ou pela direita
      if(catx  > 0){//por  cima
        r1.x += overlapX;
      }else{
        r1.x -= overlapX;
      }
    }
  }
}