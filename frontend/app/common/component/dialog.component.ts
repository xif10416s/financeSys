import { Component,Injectable ,OpaqueToken} from '@angular/core';


declare var $:any;
@Component({
    selector: 'smp-dialog',
    templateUrl: 'app/common/component/dialog.component.html'
})

export class Dialog {
    constructor() {
        console.log("Dialog.....")
    }

    openDialog(title:string, msg:string) {
        console.log(title + "  " + msg)
        $("#normalModalTitle").text(title)
        $("#normalModalMsg").text(msg)
        $("#normalModal").modal('toggle');
    }

}