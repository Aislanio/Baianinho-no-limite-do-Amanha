  let up = 87, down = 83,left = 65 ,emv = 69, right = 68,tiro_tec = 74,crea = 1,ini =1,shift = 16;
    let  gameOver = false,money=10,onda_dead = 0, dire = 1,dead = false,Tenor_id = 0, Tenor_posi = 9,Pause  = Play = false,s=0,E = false,life = 10,life_vendedor = 15;
    let moveEsquerda = moveDireita = moveCima = moveBaixo = moveShift = atirar = false;
    let id = 0,Muniçao = 0,posi = 5,tipo_arma ='soco',arma_anterior,armatime_espa  = 0,onda = 10,andando = true,arma=false,soco =false;
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;
    let music_audio = document.querySelector('#music');
    let music_effect = document.querySelector('#effect');
     setTimeout(function(){ 
      let  Menu_img  = document.querySelector('#menu');
      Menu_img.remove();
      Play = true;
      music_audio.src  = Musicas[2];
          
    }, 7000);
    //objetos
    let Objetos = [];
    let disparos = [];
    let inimigos = [];
    let disparos_enemys =[];
    let bloco_map =[];
    let  Objetos_armas=  [];
    let Espadas = [];
    let Barra = [];
    let Musicas = ['assets/music/gravity.mp3','assets/music/morty.mp3','assets/music/nigth.mp3','assets/music/Bat.mp3','assets/music/starWars.mp3']
    let  ondas = [100,150,200,7,250,300,350,400];
    //Mapa
    //imgs =================================================
    let heroyi = new Image();
    heroyi.src = "assets/Hero/Hero_norma.png"

    let enemy_img = new Image();
    enemy_img.src = 'assets/zombie/2.png'
    
    let bloco_img = new Image();
    bloco_img.src = "assets/1.png";

    let Espada_colisao_img = new Image();
    Espada_colisao_img.src = 'assets/espada_colisao.png';

    let vendedor_Img = new Image();
    vendedor_Img.src = 'assets/Hero.png';

    let tiro_img =new Image();
    tiro_img.src = 'assets/tiro.png';

    let bal = new Image();
    bal.src = 'assets/bal.png';

    let fundo = new Image();
    fundo.src = 'assets/fase1.png';

    let grav_ball  = new  Image();
    grav_ball.src= 'assets/Hero/Disparo/gravity.png';

    let rick_ball  = new  Image();
    rick_ball.src= 'assets/Hero/Disparo/rick_gos.png';

    let gravity_img  = new Image();
    gravity_img.src = 'assets/Hero/Armas/sprite_0.png';

    let  rick_img = new Image();
    rick_img.src = 'assets/Hero/Armas/rick.png';

    let star_img = new Image();
    star_img.src = 'assets/Hero/Armas/star.png';

    let bat_img = new Image();
    bat_img.src = 'assets/Hero/Armas/Bat.png';

    let lifes_img = new Image();
    lifes_img.src = 'assets/Hero/Armas/life.png';

    let muni_img= new Image();
    muni_img.src = 'assets/Hero/Armas/muni.png';

    let mesa_img = new Image();
  mesa_img.src ='assets/table.png';

  let carroça_img =  new Image();
  carroça_img.src =  'assets/carroça.png';

  let heart = new Image();
  heart.src = 'assets/life.png';

  let ball = new Image();
  ball.src = 'assets/Ball.png';

  let Radio_img = new Image();
  Radio_img.src = 'assets/Radio/sprite_0.png';

  let money_img = new Image();
  money_img.src  = 'assets/money.png';

  let explozão = new Image();
  explozão.src = 'assets/explosin/92cdd23e6ff947e1aa887eff754d106b4LdEdEZVbIxIdkU5-0.png'

  let cabe = new Image;
  cabe.src = 'assets/Zombie/cabe1.png';
    // let caixaZ = new Image();
    // caixaZ.src = 'assets/CaixaZ.png';

    let Tenor = new Image;

  let  cabeça = new Sprites(110,280,32,32,cabe)

   let  carroça = new Sprites(464,1838,100,100,carroça_img) ;

   let  life_logos = new Sprites(0,12,32,64,heart);

  let  Balls = new Sprites(5,92,28,46,ball) ;

    let Hero = new Sprites(306,1274,72,74,heroyi,3.5);

    let Radio = new Sprites(20,535,64,64,Radio_img,2);
    
    let money_barra = new Sprites(12,30,64,64,money_img,2);

    let gravity = new Sprites(10,10,24,25,gravity_img,2,65,'gravity','arma',1,0);

    let rick = new Sprites(10,10,35,35,rick_img,2,65,'rick','arma',2,1);

    let star = new Sprites(10,1274,32,32,bat_img,2,65,'star','arma',3,4);

    let bat = new Sprites(10,1274,46,46,star_img,2,65,'bat','arma',4,3);

    let lifes = new Sprites(10,1274,32,32,lifes_img,2,2,'cura',5,'cura',3);

    let muni = new Sprites(10,1274,32,32,muni_img,2,10,'bala',6,'bala',3);

    let enemyMago  =  new Sprites(300,100,36,61,heroyi,1);

    let tiro_obj = new Sprites(Hero.x +3,Hero.y + 3,32,32,tiro_img,-18);
  
    let bloco = new Sprites(0,0,29,32,bloco_img);

    let vendedor = new Sprites(542,1838,72,74,vendedor_Img);

   let armas = [star,gravity,bat,rick,lifes,muni,lifes,muni];

    let GamerWord ={
      img:fundo,
      width:1020,
      height:1980,
      x:0,
      y:0,
    }
    let Cachorro  = new Sprites(658,1810,101,152,Tenor)
    
    Objetos.push(GamerWord);
    Objetos.push(Cachorro);
    Objetos.push(vendedor);
    Objetos.push(Hero);
    Objetos.push(carroça);
    Barra.push(Balls);
    Barra.push(life_logos);
    // Barra.push(money_barra);
    Barra.push(Radio);
    Barra.push(cabeça);
    let cam = {
      x:Hero.x,
      y:Hero.y,
      width:canvas.width,
      height:canvas.height,
      leftEdg:function(){
        return this.x + (this.width * 0.25);
      },
      rigthEdg:function(){
        return this.x +(this.width * 0.75);
      },
      topEdg:function(){
        return this.y +(this.height * 0.25);
      },
      bottomEdg:function(){
        return this.y +(this.height * 0.75);
      }
    }
    

    //Teclado ===============================================
    

    window.addEventListener("keydown",keydowHandler);
    window.addEventListener("keyup",keyupHandler);
    function keydowHandler(e){
      
      let key =  e.keyCode;

      if(key  === up && key != down){
        moveCima = true;
      };
      if(key  === down && key != up){
        moveBaixo = true;
      };
      if(key  === left && key != right) {
        moveEsquerda =true
      };
      if(key  === right && key != left){
       moveDireita = true;
      };
      if (key === tiro_tec) {
        atirar=false;
      }
      if (key == shift) {
        moveShift = true;
      }
      if (key == emv) {
        E = true;
      }
    };

    function keyupHandler(e){
      
      let key =  e.keyCode;
      if(key  === up && key != down){
        moveCima = false;
      };
      if(key  === down && key != up){
        moveBaixo = false;
      };
      if(key  === left && key != right) {
        moveEsquerda = false;
      };
      if(key  === right && key != left){
       moveDireita = false;
      };
      if (key === tiro_tec) {
        atirar = true;
      }
      if(key == shift){
        moveShift = false;
      }
      if (key == emv) {
        E = false;
      }
    };
    la=1
    function update(){
      //colisao
      block(Hero,vendedor);
      block(Hero,Cachorro);
      if(onda_dead >= onda ){
        onda = ondas[la];
        onda_dead = 0;    
        la++;
      }
      //disparos vs Enemy
      for (let xo in inimigos) {
        for(let ox in disparos){        
          let enemy_o = inimigos[xo];
          let tiro_o = disparos[ox];
          if (tiro_o.width + tiro_o.x  > enemy_o.x && tiro_o.x < enemy_o.x + enemy_o.width &&tiro_o.y + tiro_o.width > enemy_o.y && tiro_o.y < enemy_o.y + enemy_o.width ) {
              onda_dead++;  
              money++;
               removeObjects(tiro_o,disparos);
              setTimeout(function(){ 
                removeObjects(enemy_o,inimigos);
              }, 90);        
          }
          
       }
    }
    if(dead != true){
        if (Muniçao <= 0) {
      Muniçao = 0;
      tipo_arma ='soco';
    }

      andando  = false;
      if(moveCima){
        Hero.y -= Hero.speed;
          dire = 1;
          andando = true;
      }
      if(moveBaixo){
        andando = true;
        Hero.y += Hero.speed;
        if (moveShift) {
          dire = 2;
        }
        
      }
      if(moveDireita){
        andando = true;
        Hero.x += Hero.speed;
        if (moveShift) {
          dire = 3;
        }
        
      }
      if (moveEsquerda) {
        andando = true;
        Hero.x -= Hero.speed;
        if (moveShift) {
          dire = 4;
        }
        
        
      }
      if (atirar) {
          firemeTiro();
          atirar = false
          andando  = false;
          soco = true;
        
      }
    }
    

      //camera 
        if (Hero.x < cam.leftEdg()) {
            cam.x = Hero.x - (cam.width *0.25);
        }
        if (Hero.x + Hero.width > cam.rigthEdg()) {
          cam.x = Hero.x + Hero.width - (cam.width *0.75);
          
        }
        if (Hero.y < cam.topEdg()) {
          cam.y = Hero.y - (cam.height *0.25);
          
        }
        if (Hero.y + Hero.height > cam.bottomEdg()) {
          cam.y = Hero.y + Hero.height - (cam.height *0.75);
          
        }
      //===============

      
      if (life == 0) {
        dead = true;
      }

      
    
        
      }
      //=====================================
      
       
        
      //direção enemy
          //============================



  //remove os objs
  function removeObjects(obj,arra){
    let i = arra.indexOf(obj);
    if(i !== -1){
      arra.splice(i,1);
    }
  
  }
  

  function firemeTiro(){
    Muniçao--;
    if(Muniçao > 0){
      if(tipo_arma =='soco'){
      let soco = {
        img:Espada_colisao_img,
        x:Hero.x +5,
        y:Hero.y -50,
        width:64,
        height:64,
        direção: dire,
        speed:-1,
      };
       ini++;
      Espadas.push(soco);
      // 
      }
      if(tipo_arma =="star"){
      let Espada_colisao = {
        img:Espada_colisao_img,
        x:Hero.x +5,
        y:Hero.y -50,
        width:64,
        height:64,
        direção: dire,
        speed:-1,
      };
       ini++;
      Espadas.push( Espada_colisao);
      // 
      }else if(tipo_arma == "bat"){
        let bat_ball = {
          img:bat_img,
          x:Hero.x +5,
          y:Hero.y + 5,
          width:32,
          height:32,
          direção: dire,
          speed:-0.7,
        };
        disparos.push(bat_ball);
        ini++;
      }else if(tipo_arma == "gravity"){
       let gravity_ball = {
        img:grav_ball,
        x:Hero.x +5,
        y:Hero.y + 5,
        width:50,
        height:50,
        direção: dire,
        speed:-0.7,

      };
      disparos.push(gravity_ball);
      ini++;
      }
     if(tipo_arma == 'rick' ){
      let rick_balls = {
        img:rick_ball,
        x:Hero.x +5,
        y:Hero.y + 5,
        width:32,
        height:32,
        direção: dire,
        speed:-0.7,

    };
    disparos.push(rick_balls);
    ini++;
  }

    atirar=false;
    }

    
    }
  
  function FireEnemy(alx,aly,direa){
    
    let tiro_a = {
      img:bal,
      x:alx,
      y:aly,
      width:32,
      height:32,
      direção:direa,
      speed:-17
    }
     disparos_enemys.push(tiro_a);
  }
  function  update2(){
      //limites  da tela
    cam.x = Math.max(0,Math.min(GamerWord.width - cam.width, cam.x));
    cam.y = Math.max(0,Math.min(GamerWord.height - cam.height, cam.y));
    Hero.x = Math.max(0,Math.min(GamerWord.width - Hero.width, Hero.x));
    Hero.y = Math.max(0,Math.min(GamerWord.height - Hero.height, Hero.y));

    //direção  enemy
    if(life >  0){
      for(let f in inimigos){
        let enemy_alf = inimigos[f];
        
        if(enemy_alf.y < Hero.y -2){
          enemy_alf.y += enemy_alf.speed * 1.4;
        }else if(enemy_alf.y > Hero.y+2){
         enemy_alf.y -= enemy_alf.speed * 1.4;
        }else{
        if(enemy_alf.x < Hero.x){
         enemy_alf.x += enemy_alf.speed * 1.4;
        }
        if(enemy_alf.x > Hero.x){
         enemy_alf.x -= enemy_alf .speed * 1.4;
        }
        } 
      }
    }else if (life ==0 ) {
    for(let f in inimigos){
        let enemy_alf = inimigos[f];
        
        if(enemy_alf.y < vendedor.y -2){
          enemy_alf.y += enemy_alf.speed * 0.8;
          if (ini > 0) {
            FireEnemy(enemy_alf.x,enemy_alf.y,1);
             ini--;
          }
        }else if(enemy_alf.y > vendedor.y+2){
         enemy_alf.y -= enemy_alf.speed * 0.8;
          if (ini > 0) {
            FireEnemy(enemy_alf.x,enemy_alf.y,2);
             ini--;
          }
        }else if(enemy_alf.x <vendedor.x){
        enemy_alf.x += enemy_alf.speed * 0.8;
        if (ini > 0) {
            FireEnemy(enemy_alf.x,enemy_alf.y,3);
             ini--;
          }1
        if(enemy_alf.x > vendedor.x){
        enemy_alf.x -= enemy_alf.speed * 0.8;
        if (ini > 0) {
            FireEnemy(enemy_alf.x,enemy_alf.y,4);
             ini--;
          }
        }
      }
    }
  }
    //////////////

    if(Hero.x + Hero.width > vendedor.x && Hero.x < vendedor.x + vendedor.width && Hero.y + Hero.height > vendedor.y&& Hero.y < vendedor.y +  vendedor.height){
        if(E){

            const numero_alf = Math.floor(Math.random() * armas.length);
            let numero = armas[numero_alf];
            
              if(numero_alf <= armas.length ){
                if (money>=numero.moneys ) {
                money -= numero.moneys
                if(numero.tipo_ferramenta == "cura"){
                  life += 2;
                }
                if (numero.tipo_ferramenta == "bala") {
                  Muniçao += 10;

                }
                if (numero.tipo_ferramenta == "arma") {
                  tipo_arma = numero.tipo;
                  Muniçao =  numero.quant_balas;
                  music_audio.src =  Musicas[numero.music];
                  
                }
                if(numero.tipo_ferramenta == 'espada'){
                  tipo_arma = numero.tipo;
                  Muniçao = numero.quant_balas;
                  music_audio.src =  Musicas[numero.music];
                }
              }    
            }
            
            
          }
           
          
            ///musica
           
          
        }
      }
    
      /////////
      function update3(){
       for (let qw in inimigos){
        let enemy_o = inimigos[qw];
        if(dead != true){
          
          if(Hero.width + Hero.x  > enemy_o.x && Hero.x < enemy_o.x +enemy_o.width && Hero.y + Hero.width > enemy_o.y && Hero.y < enemy_o.y + enemy_o.width){
            life--;
            Hero.y += 1.3;
            Hero.x+=1.4;
          }
          if(vendedor.width + vendedor.x  > enemy_o.x && vendedor.x < enemy_o.x +enemy_o.width && vendedor.y + vendedor.width > enemy_o.y && vendedor.y < enemy_o.y + enemy_o.width){
            life_vendedor--;
            if(life_vendedor == 0){
              gameOver = true;
            }
          }
        
        }else{
          if(Hero.width + Hero.x  > enemy_o.x && Hero.x < enemy_o.x +enemy_o.width && Hero.y + Hero.width > enemy_o.y && Hero.y < enemy_o.y + enemy_o.width){
            
            removeObjects(enemy_o,inimigos);
          }
        }
      }
        
    let Tiro_as = '';
    for(let a in disparos_enemys){
          let Tiroenemy_o = disparos_enemys[a];
          if (Hero.width + Hero.x  > Tiroenemy_o.x && Hero.x < Tiroenemy_o.x +Tiroenemy_o.width && Hero.y + Hero.width > Tiroenemy_o.y && Hero.y < Tiroenemy_o.y + Tiroenemy_o.width) {
            removeObjects(Tiroenemy_o,disparos_enemys); 
            if(Tiro_as != Tiroenemy_o )
            life--;
            
          }
          
          Tiro_as = Tiroenemy_o;
      }

      if(life <= 0){
        dead = true
        life = 0;
        
      }
      
      //===============================================
      
      //////// armas 
      
      
      
      

        //disparo speed
        for(let x in disparos){
          let missile = disparos[x];
          
          if (missile.direção == 1) {
            missile.y += tiro_obj.speed;
          }
          if (missile.direção == 3) {
            missile.x += missile.width;
            missile.x += tiro_obj.speed;
          }
          if (missile.direção == 2) {
            missile.y += missile.width;
            missile.y += tiro_obj.speed;
          }
          if (missile.direção == 4) {
            missile.x += tiro_obj.speed;
          }
          if(missile.x <0){
            removeObjects(missile,disparos);
          }
          if(missile.x  +  missile.width  >  GamerWord.width){
            removeObjects(missile,disparos);
          }
          if(missile.y < 0){
            removeObjects(missile,disparos);
          }
          if(missile.y + missile.height  > GamerWord.height){
            removeObjects(missile,disparos)
          }
          
        }
        //itemns 

        //==============================  

        //disparo enemy
        }
      for(let p in disparos_enemys){
        let enemy_tiro = disparos_enemys[p];
        if (enemy_tiro.direção == 2) {
            enemy_tiro.y += enemy_tiro.speed;
          }
          if (enemy_tiro.direção == 3) {
            enemy_tiro.x += enemy_tiro.width;
            enemy_tiro.x += enemy_tiro.speed;
          }
          if (enemy_tiro.direção == 1) {
            enemy_tiro.y += enemy_tiro.width;
            enemy_tiro.y += enemy_tiro.speed;
          }
          if (enemy_tiro.direção == 4) {
            enemy_tiro.x += enemy_tiro.speed;
          }
          if(enemy_tiro.x < 0){
            removeObjects(enemy_tiro,disparos_enemys);
          }
          if(enemy_tiro.x  +  enemy_tiro.width > GamerWord.width){
            removeObjects(enemy_tiro,disparos_enemys);
          }
          if(enemy_tiro.y   < 0){
            removeObjects(enemy_tiro,disparos_enemys);
          }
          if(enemy_tiro.y  +  enemy_tiro.height > GamerWord.height){
            removeObjects(enemy_tiro,disparos_enemys);
          }
      }

  

  
    //Desenhar ============================================
    function render(){
     
      ctx.save();
      ctx.translate(-cam.x,-cam.y);
      ctx.clearRect(0,0,canvas.width,canvas.height);

      //animação
    /////////
      for (let i in Objetos) {
        let spr = Objetos[i];

        ctx.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);
        
        for (let k in bloco_map) {
          let spr = bloco_map[k];
          ctx.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);
      }
      };
      for( let p in inimigos){
        let spr = inimigos[p];
        ctx.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);
      }
      for(let s in disparos){
        let spr = disparos[s];
        ctx.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);
      }
      for(let y in disparos_enemys){
        let spr = disparos_enemys[y];
         ctx.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);
      }
      for(let v in Espadas){
        let spr = Espadas[v];
        ctx.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);

      }
      for(let  gr in Objetos_armas){
        let spr = Objetos_armas[gr];
        ctx.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);
      }
      
      ctx.restore();
      for(let re in Barra){
        let spr = Barra[re];
        ctx.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);
      }
      ctx.fillStyle = "white";
       ctx.font = "bold 30px C";
      ctx.fillText(money, 85,70);

      ctx.fillStyle = "Black";
      ctx.font = "25px Comic Sans MS";
      ctx.fillText(Muniçao,37,125);

      
      ctx.fillStyle = "Black";
       ctx.font = "20px Comic Sans MS";
      ctx.fillText('Vida do Baianinho:'+life_vendedor, 90,20);
     
     
      ctx.fillStyle = "white";
       ctx.font = "20px Comic Sans MS";
      ctx.fillText(onda_dead+'/'+onda, 140,300);

      ctx.fillStyle = "white";
       ctx.font = "25px Comic Sans MS";
      ctx.fillText(life, 40,36);
    };
    let pos_explo = 0,explosao_quant = 0,posi_Global2= 0;

    function animation(){
      Tenor.src =`assets/Tenors/0c7863b5d7da4873c8cf2226111cec23Qh9tZE2ayiiL5m0O-`+Tenor_id+`.png`;
      if(andando){
        heroyi.src = 'assets/Hero/Hero_move/sprite_'+posi+'.png';
      }
      if(soco){
        heroyi.src = 'assets/Hero/Hero_soco/sprite_'+posi+'.png';
      }
      if(arma){
        heroyi.src = 'assets/Hero/Hero_move'+'/sprite_'+posi;
      }
      if(dead){
        heroyi.src =  'assets/explosin/92cdd23e6ff947e1aa887eff754d106b4LdEdEZVbIxIdkU5-'+posi+'.png';
        
        
        if(life == 10){
          dead = false;
          life -= explosao_quant;
          explosao_quant++;
        }
      }

        if(posi_Global2 <=4){
          Radio_img.src ='assets/Radio/sprite_'+posi_Global2+'.png';
        }
        
        
      }
    

    function loop(){
      
      if (Play) {
      update();
      animation();
      update2();
      update3();
      render();

      }if (Pause) {
        render();
      }
      requestAnimationFrame(loop,canvas);
      
    }
    function main(){
      setInterval(function(){ ini++;  }, 12000);
      setInterval(function(){if(Tenor_id == 9){
        Tenor_id = 0;
      }else {
        Tenor_id++;
      };

      if(posi == 5){
        posi  = 0;
        soco  = false;
        andando = true;
      }
      if(posi <= 5){
        posi++;
      }
      
      if(dead){
        pos_explo++;
        life++
        
      }
      if (pos_explo >= 12) {
        Hero.y += 5;
        Hero.x+=5;
        pos_explo = 0;
      }

      }, 90);
      
    }
    setInterval(function(){
      for (let i in Espadas) {
        for(let z in inimigos){
          let espada_o = Espadas[i];
          let enemy_o = inimigos[z];
           if (espada_o.width + espada_o.x  > enemy_o.x && espada_o.x < enemy_o.x +enemy_o.width && espada_o.y + espada_o.width > enemy_o.y && espada_o.y < enemy_o.y + enemy_o.width) {
            removeObjects(enemy_o,inimigos);
            
          }
        }
       
      }
      
      if(Espadas.length > 0){
      Espadas. pop()} 

    }, 100);
    let ss = 0;
     setInterval(function(){ 
      let zombie = new Sprites(300,100,96,100,enemy_img,1.3);
      let zombiez = new Sprites(300,100,96,100,enemy_img,1.3);
      
      if(tipo_arma == 'star'){
          enemy_img.src =  'assets/Zombie/3.png'
        }else{
          enemy_img.src =  'assets/Zombie/1.png'
        }

      if( s  <= onda / 2){
        zombie.x = 300;
        zombie.y = 100;
        
        inimigos.push(zombie);
          s++;
      }
      if(ss  <= onda /2){
        zombiez.x = 948;
        zombiez.y = 86;
        ss++;
      
        inimigos.push(zombiez);
      }

      posi_Global2++;
      if (posi_Global2 >=6) {
        posi_Global2  =  0;
      }
     
    }, 500);
    main();
    loop();




