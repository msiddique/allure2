'use strict';
allure.api.addTranslation('en', {
    tab: {
        behaviors: {
            name: 'Failures'
        }
    }
});

allure.api.addTab('failures', {
    title: 'tab.failures.name', icon: 'fa fa-line-chart',
    route: 'failures(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',
    onEnter: (function (testGroup, testResult, testResultTab) {
        return new allure.components.TreeLayout({
            testGroup: testGroup,
            testResult: testResult,
            testResultTab: testResultTab,
            tabName: 'tab.failures.name',
            baseUrl: 'failures',
            url: 'data/failures.json'
        });
    })
});