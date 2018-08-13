```
<apto-shimmer></apto-shimmer>
```

### Sample Usage
```
<span *ngIf="!isSomethingLoading; else myShimmer">500 open tasks</span>
<ng-template #myShimmer><apto-shimmer></apto-shimmer></ng-template>
```
