import { Injectable ,OpaqueToken} from '@angular/core';


declare var $:any;
@Injectable()
export class ProgressBar {
    progressing:number = 5;
    progressingStyle:string;
    isProgressing = false;
    interval;
    constructor() {
        console.log("ProgressBar.....")
    }

    onProgressing() {
        if(this.isProgressing){
            return;
        }
        this.isProgressing = true;
        $("#progressBarDiv").show();
        $("#progressBar").css('width', this.progressingStyle)
        this.interval = setInterval(()=> {
                $("#progressBar").css('width', this.progressingStyle)
                this.progressingStyle = this.progressing + "%";
                if (this.progressing > 0) {
                    $("#progressBar").show();
                }
                this.progressing = this.progressing + 15;
                if (this.progressing >= 160) {
                    this.progressing = 0;
                    $("#progressBar").hide();
                }
                console.log("process.." + this.progressing)

            }, 300
        )
    }

    stopProgress() {
        $("#progressBarDiv").hide();
        this.progressing = 0;
        this.progressingStyle = this.progressing + "%";
        $("#progressBar").css('width', this.progressingStyle)
        if (this.interval != null) {
            clearInterval(this.interval)
        }
        this.isProgressing = false
    }

}