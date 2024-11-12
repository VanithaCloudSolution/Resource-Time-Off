import { LightningElement,track,wire,api} from 'lwc';
import getServiceResources from '@salesforce/apex/FetchResourceAbsenceRecords.getServiceResources';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class CustomResourceAbsenceParen extends LightningElement {
  
        @track recordTypeId;
        @track resourceName='';
        @track resourceList=[];
        @track resoruceId;
        @track messageResult=false;
        @track showSearchValue=false;
        @track isButtonClicked = false;
        
     
     //new button clicked
  handleClick() {
    // Set the flag to true when the button is clicked
   this.isButtonClicked = true;
    
}
     
       // look up field for service resource
        @wire(getServiceResources, {resName:'$resourceName'})
      retrieveServiceResources({error,data}){
        if(data){
            this.resourceList=data;
            this.showSearchValue=data.length >0;
            this.messageResult=data.length === 0 && this.resourceName !== '';
     
        }
        else if(error){
            console.error(error);
        }
      }
      handleChange(event){
        this.resourceName= event.target.value;
      }
      handleparentsection(event){
        this.resoruceId=event.target.dataset.value;
        this.resourceName=event.target.dataset.label;
        const selectedEvent= new CustomEvent('selected',{detail: this.resoruceId});
        this.dispatchEvent(selectedEvent);
        this.showSearchValue=false;
      }
     
      //type field - combobox
      get options() {
        return [
            { label: 'Vacation', value: 'Vacation' },
            { label: 'Meeting', value: 'Meeting' },
            { label: 'Training', value: 'Training' },
            { label: 'Medical', value: 'Medical' },
     
        ];
    }
    handleSuccess(event) {
      // Prevent the default submit behavior to manually control when the toast is shown
      event.preventDefault(); 

      const fields = event.detail.fields;
      // Perform any additional validation if necessary

      // Manually submit the form
      this.template.querySelector('lightning-record-edit-form').submit(fields);

      // Show success toast message
      this.showSuccessToast();
  }

  // New method to show success toast
  showSuccessToast() {
      const showSuccess = new ShowToastEvent({
          title: "Success!",
          message: "The record was created successfully.",
          variant: 'success',
      });
      this.dispatchEvent(showSuccess);
  }
  handleError() {
    const showError = new ShowToastEvent({
        title: "Error",
        message: "There was an issue saving the record.",
        variant: 'error',
    });
    this.dispatchEvent(showError);
}

handleCloseModal() {
  this.isButtonClicked = false;
}
 
}