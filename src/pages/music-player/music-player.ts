import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';


@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html',
})
export class MusicPlayerPage {
  public music={};
  private songMedia : MediaObject = null;
  private isMusicPaused = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private media:Media

              ) {
    this.music= this.navParams.get('music');
  }

  ionViewDidLoad() {

  }
  playMusic(){
    if(this.songMedia=== null){
      this.songMedia= this.media.create(this.music["music_url"]);
      this.songMedia.play();
    }else{
          if(this.isMusicPaused === true){
            this.songMedia.play();
            this.isMusicPaused = false;
          }
    }

  };
  stopMusic(){
    if(this.songMedia !== null){
      this.songMedia.stop();
      this.songMedia.release();
      this.songMedia = null;
    }
  };
  pauseMusic(){
    if(this.songMedia !== null) {
      this.songMedia.pause();
      this.isMusicPaused = true;
    }
  };

}
