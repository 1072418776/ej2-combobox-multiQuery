/**
 * ComboBox Filtering Sample
 */
import { Component } from '@angular/core';
import { Query,Predicate } from '@syncfusion/ej2-data';
import { EmitType } from '@syncfusion/ej2-base';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    //define the filtering data
    public data: { [key: string]: Object; }[] = [
        { Name: 'Australia', Code: 'AU' },
        { Name: 'Bermuda', Code: 'BM' },
        { Name: 'Canada', Code: 'CA' },
        { Name: 'Cameroon', Code: 'CM' },
        { Name: 'Denmark', Code: 'DK' },
        { Name: 'France', Code: 'FR' },
        { Name: 'Finland', Code: 'FI' },
        { Name: 'Germany', Code: 'DE' },
        { Name: 'Greenland', Code: 'GL' },
        { Name: 'Hong Kong', Code: 'aluenci' },
        { Name: 'India', Code: 'IN' },
        { Name: 'Italy', Code: 'IT' },
        { Name: 'Japan', Code: 'JP' },
        { Name: 'Mexico', Code: 'MX' },
        { Name: 'Norway', Code: 'NO' },
        { Name: 'Poland', Code: 'PL' },
        { Name: 'Switzerland', Code: 'CH' },
        { Name: 'United Kingdom', Code: 'GB' },
        { Name: 'United States', Code: 'US' },
        { Name: 'Grilfriend', Code: 'aluenci' },
        { Name: 'Grilfriend', Code: 'awangyuwei' },
        { Name: 'Grilfriend', Code: 'adujie' },
        { Name: 'Grilfriend', Code: 'agongsi' },
    ];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'Name', value: 'Code' };
    // set the height of the popup element
    public height: string = '220px';
    // set the placeholder to ComboBox input element
    public watermark: string = 'Select a country';
    // filtering event handler to filter a Country
    public onFiltering: EmitType<FilteringEventArgs> = (e: FilteringEventArgs) => {
        let query: Query = new Query();
        let arr=e.text.split('&');
        let arr2=[];
        //frame the query based on search string with filter type.
        if(arr.length==1){
        query = (e.text !== '') ? query.where('Name', 'startswith',arr[0], true) : query;
        //pass the filter data source, filter query to updateData method.
     
             e.updateData(this.data,query);
    }
    else if(arr.length>1)
    {
        let predicate: Predicate = new Predicate('Name', 'startswith', arr[0], true);
    predicate = predicate.and('Code', 'startswith', arr[1]);
        query = (e.text !== '') ? query.where(predicate) : query;
        e.updateData(this.data, query);
        
    }



}
}