import { LightningElement , wire, track} from 'lwc';
import getLeadList from '@salesforce/apex/LWCAccountHelper.getLeadList';
export default class LightningDatatableLWCExample extends LightningElement {
    @track columns = [{
            label: 'Lead name',
            fieldName: 'Name',
            type: 'text',
        },
        {
            label: 'Company',
            fieldName: 'Company',
            type: 'text',
        },
        {
            label: 'Phone',
            fieldName: 'Phone',
            type: 'phone',
        },
        {
            label: 'Email',
            fieldName: 'Email',
            type: 'text',
        },
        {
            label: 'Rating',
            fieldName: 'Rating',
            type: 'text',
        },
        {
            label: 'Status',
            fieldName: 'Status',
            type: 'text',
        },
    ];
 
    leadNameSearch = '';
    leadCompanySearch = '';
    leadPhoneSearch = '';
    leadEmailSearch = '';
    leadRatingSearch = '';
    leadStatusSearch = '';

    @track error;
    @track leadList;

    @wire(getLeadList,
        {
            nameLeadSearchTerm: '$leadNameSearch', 
            companyLeadSearchTerm: '$leadCompanySearch',
            phoneLeadSearchTerm: '$leadPhoneSearch',
            emailLeadSearchTerm: '$leadEmailSearch',
            ratingLeadSearchTerm: '$leadRatingSearch',
            statusLeadSearchTerm: '$leadStatusSearch',
        }
        )
    wiredAccounts({
        error,
        data
    }) {
        if (data) {
            this.leadList = data;
        } else if (error) {
            this.error = error;
        }
    }
    selectedIds;

    getSelectedId(event) {
        selectedIds = '';
        const selectedRows = event.detail.selectedRows;
        for (let i = 0; i<selectedRows.length; i++ ) {
            this.selectedIds += selectedRows[i].Id + ',';    
        }
    }
}
