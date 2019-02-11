import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicsProvider } from "../../providers/musics/musics";
import { MusicPlayerPage } from "../music-player/music-player";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allMusic =[];

  constructor(public navCtrl: NavController,
              private  actionSheetController: ActionSheetController,
              private musicProvider: MusicsProvider,
              public loadingController: LoadingController) {

  }


    ionViewDidLoad(){

      let allMusicLoadingController = this.loadingController.create({
          content:"Getting Your Songs From Server"
      });
      allMusicLoadingController.present();

      this.musicProvider.getMusics().subscribe((musicList)=> {

        allMusicLoadingController.dismiss();
        // @ts-ignore
        this.allMusic = musicList;
      });

    }
      shareSong(){
        let shareSongActionSheet= this.actionSheetController.create({
          title:"Share Song",
          buttons:[
            {
              text:"Share on Facebook",
              icon:"logo-facebook"
            },
            {
              text:"Twitter",
              icon:"logo-twitter"
            },
            {
              text:"Share",
              icon:"share"
            },
            {
              text:"Cancel",
              role:"destructive"
            }
          ]
        });
        shareSongActionSheet.present();
      }

  goToMusic(music){
    this.navCtrl.push(MusicPlayerPage, {
      music: music
    });
  }
}
