import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.AccountId';
import CLOSE_FIELD from '@salesforce/schema/Opportunity.CloseDate';

export default class OpportunitySearch extends LightningElement {
    nameSearchTerm;
    accountSearchTerm;
    stageSearchTerm;
    closeSearchTerm;
    oppFields = [ NAME_FIELD, ACCOUNT_FIELD, STAGE_FIELD, CLOSE_FIELD ];

    @wire(getObjectInfo, { objectApiName: OPPORTUNITY_OBJECT })
    oppMetadata;

    @wire(getPicklistValues,
        {
            recordTypeId: '$oppMetadata.data.defaultRecordTypeId', 
            fieldApiName: STAGE_FIELD
        }
    )
    stageOptions;

    handleName(event) {
        this.nameSearchTerm = event.detail.value;
    }

    handleAccount(event) {
        this.accountSearchTerm = event.detail.value;
    }

    handleStage(event) {
        this.stageSearchTerm = event.detail.value;
    }

    handleClose(event) {
        this.closeSearchTerm = event.detail.value;
    }
    createOpp = false;

    handleCreate(event){
       // this.dispatchEvent(new CustomEvent('create'));
        this.createOpp = !this.createOpp
    }
}