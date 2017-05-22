define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'U.S. Census';
            config.map([
                { route: '', name: 'welcome', moduleId: 'welcome' },
                { route: 'household/:question?', name: 'household', moduleId: 'household/index' },
                { route: 'demographics', name: 'demographics', moduleId: 'demographics' },
                { route: 'person/:index?/:question?', name: 'person', moduleId: 'person/index' },
                { route: 'finish', name: 'finish', moduleId: 'finish' }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBY0EsQ0FBQztRQVhDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQztnQkFDbEQsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUM7Z0JBQ2hGLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUM7Z0JBQ3hFLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQztnQkFDL0UsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTthQUN4RCxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsVUFBQztJQUFELENBZEEsQUFjQyxJQUFBO0lBZFksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJDb25maWd1cmF0aW9uLCBSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHJvdXRlcjogUm91dGVyO1xuICBcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICBjb25maWcudGl0bGUgPSAnVS5TLiBDZW5zdXMnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogJycsIG5hbWU6ICd3ZWxjb21lJywgbW9kdWxlSWQ6ICd3ZWxjb21lJ30sXG4gICAgICB7IHJvdXRlOiAnaG91c2Vob2xkLzpxdWVzdGlvbj8nLCBuYW1lOiAnaG91c2Vob2xkJywgbW9kdWxlSWQ6ICdob3VzZWhvbGQvaW5kZXgnfSxcbiAgICAgIHsgcm91dGU6ICdkZW1vZ3JhcGhpY3MnLCBuYW1lOiAnZGVtb2dyYXBoaWNzJywgbW9kdWxlSWQ6ICdkZW1vZ3JhcGhpY3MnfSxcbiAgICAgIHsgcm91dGU6ICdwZXJzb24vOmluZGV4Py86cXVlc3Rpb24/JywgbmFtZTogJ3BlcnNvbicsIG1vZHVsZUlkOiAncGVyc29uL2luZGV4J30sXG4gICAgICB7IHJvdXRlOiAnZmluaXNoJywgbmFtZTogJ2ZpbmlzaCcsIG1vZHVsZUlkOiAnZmluaXNoJyB9XG4gICAgXSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('data-store',["require", "exports", "./person"], function (require, exports, person_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataStore = (function () {
        function DataStore() {
            this.additionalPeople = [];
            this.homeOwnership = "";
            this.phoneNumber = "";
            this.people = [];
        }
        Object.defineProperty(DataStore.prototype, "hasNoPeople", {
            get: function () {
                return this.people.length === 0;
            },
            enumerable: true,
            configurable: true
        });
        DataStore.prototype.getPerson = function (index) {
            if (index <= 0) {
                throw "invalid people index";
            }
            while (this.people.length < index) {
                this.people.push(new person_1.Person(this.people.length + 1));
            }
            return Promise.resolve(this.people[index - 1]);
        };
        return DataStore;
    }());
    exports.DataStore = DataStore;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFBQTtZQUdFLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztZQUVoQyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztZQUUzQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztZQUV6QixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBZXhCLENBQUM7UUFiQyxzQkFBSSxrQ0FBVztpQkFBZjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLENBQUM7OztXQUFBO1FBRUQsNkJBQVMsR0FBVCxVQUFVLEtBQUs7WUFDYixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixNQUFNLHNCQUFzQixDQUFDO1lBQy9CLENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDSCxnQkFBQztJQUFELENBeEJBLEFBd0JDLElBQUE7SUF4QlksOEJBQVMiLCJmaWxlIjoiZGF0YS1zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGVyc29ufSBmcm9tICcuL3BlcnNvbic7XG5cbmV4cG9ydCBjbGFzcyBEYXRhU3RvcmUge1xuICBwb3BDb3VudDogbnVtYmVyO1xuXG4gIGFkZGl0aW9uYWxQZW9wbGU6IHN0cmluZ1tdID0gW107XG5cbiAgaG9tZU93bmVyc2hpcDogc3RyaW5nID0gXCJcIjtcblxuICBwaG9uZU51bWJlcjogc3RyaW5nID0gXCJcIjtcblxuICBwZW9wbGU6IFBlcnNvbltdID0gW107XG5cbiAgZ2V0IGhhc05vUGVvcGxlKCkge1xuICAgIHJldHVybiB0aGlzLnBlb3BsZS5sZW5ndGggPT09IDA7XG4gIH1cblxuICBnZXRQZXJzb24oaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPD0gMCkge1xuICAgICAgdGhyb3cgXCJpbnZhbGlkIHBlb3BsZSBpbmRleFwiO1xuICAgIH1cbiAgICB3aGlsZSAodGhpcy5wZW9wbGUubGVuZ3RoIDwgaW5kZXgpIHtcbiAgICAgIHRoaXMucGVvcGxlLnB1c2gobmV3IFBlcnNvbih0aGlzLnBlb3BsZS5sZW5ndGggKyAxKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5wZW9wbGVbaW5kZXggLSAxXSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('demographics',["require", "exports", "aurelia-framework", "aurelia-router", "./data-store"], function (require, exports, aurelia_framework_1, aurelia_router_1, data_store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Demograhics = (function () {
        function Demograhics(router, dataStore) {
            this.router = router;
            this.dataStore = dataStore;
        }
        Demograhics.prototype.activate = function (params, routeConfig) {
            routeConfig.navModel.setTitle('Demographics');
            return Promise.resolve();
        };
        Demograhics.prototype.save = function () {
            this.router.navigateToRoute('person', { person: 1 });
        };
        ;
        return Demograhics;
    }());
    Demograhics = __decorate([
        aurelia_framework_1.inject(aurelia_router_1.Router, data_store_1.DataStore),
        __metadata("design:paramtypes", [aurelia_router_1.Router, data_store_1.DataStore])
    ], Demograhics);
    exports.Demograhics = Demograhics;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW9ncmFwaGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLFdBQVc7UUFFdEIscUJBQW9CLE1BQWMsRUFBVSxTQUFvQjtZQUE1QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFLLENBQUM7UUFFdEUsOEJBQVEsR0FBUixVQUFTLE1BQVcsRUFBRSxXQUF3QjtZQUM1QyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFFRCwwQkFBSSxHQUFKO1lBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUFBLENBQUM7UUFDSixrQkFBQztJQUFELENBWkEsQUFZQyxJQUFBO0lBWlksV0FBVztRQUR2QiwwQkFBTSxDQUFDLHVCQUFNLEVBQUUsc0JBQVMsQ0FBQzt5Q0FHSSx1QkFBTSxFQUFxQixzQkFBUztPQUZyRCxXQUFXLENBWXZCO0lBWlksa0NBQVciLCJmaWxlIjoiZGVtb2dyYXBoaWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZ30gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtEYXRhU3RvcmV9IGZyb20gJy4vZGF0YS1zdG9yZSc7XG5pbXBvcnQge1BlcnNvbn0gZnJvbSAnLi9wZXJzb24nO1xuXG5AaW5qZWN0KFJvdXRlciwgRGF0YVN0b3JlKVxuZXhwb3J0IGNsYXNzIERlbW9ncmFoaWNzIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRhdGFTdG9yZTogRGF0YVN0b3JlKSB7ICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zOiBhbnksIHJvdXRlQ29uZmlnOiBSb3V0ZUNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgcm91dGVDb25maWcubmF2TW9kZWwuc2V0VGl0bGUoJ0RlbW9ncmFwaGljcycpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoJ3BlcnNvbicsIHtwZXJzb246IDF9KTtcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('finish',["require", "exports", "aurelia-framework", "./data-store"], function (require, exports, aurelia_framework_1, data_store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Finish = (function () {
        function Finish(dataStore) {
            this.dataStore = dataStore;
        }
        return Finish;
    }());
    Finish = __decorate([
        aurelia_framework_1.inject(data_store_1.DataStore),
        __metadata("design:paramtypes", [data_store_1.DataStore])
    ], Finish);
    exports.Finish = Finish;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmlzaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLE1BQU07UUFDakIsZ0JBQW9CLFNBQW9CO1lBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBSSxDQUFDO1FBQy9DLGFBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLE1BQU07UUFEbEIsMEJBQU0sQ0FBQyxzQkFBUyxDQUFDO3lDQUVlLHNCQUFTO09BRDdCLE1BQU0sQ0FFbEI7SUFGWSx3QkFBTSIsImZpbGUiOiJmaW5pc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtEYXRhU3RvcmV9IGZyb20gJy4vZGF0YS1zdG9yZSc7XG5cbkBpbmplY3QoRGF0YVN0b3JlKVxuZXhwb3J0IGNsYXNzIEZpbmlzaCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVN0b3JlOiBEYXRhU3RvcmUpIHsgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('person',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Person = (function () {
        function Person(index) {
            this.firstName = "";
            this.lastName = "";
            this.sex = "";
            this.origin = [];
            this.race = [];
            this.livedElsewhere = [];
            this.index = index;
        }
        Object.defineProperty(Person.prototype, "isNameValid", {
            get: function () {
                return this.firstName !== "" || this.lastName !== "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "isSexValid", {
            get: function () {
                return this.sex !== "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "isAgeValid", {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "isOriginValid", {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "isRaceValid", {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "isLivedElsewhereValid", {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    exports.Person = Person;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQXlCRSxnQkFBYSxLQUFhO1lBdEIxQixjQUFTLEdBQVcsRUFBRSxDQUFDO1lBSXZCLGFBQVEsR0FBVyxFQUFFLENBQUM7WUFFdEIsUUFBRyxHQUFXLEVBQUUsQ0FBQztZQVVqQixXQUFNLEdBQWEsRUFBRSxDQUFDO1lBRXRCLFNBQUksR0FBYSxFQUFFLENBQUM7WUFFcEIsbUJBQWMsR0FBYSxFQUFFLENBQUM7WUFHNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQztRQUVELHNCQUFJLCtCQUFXO2lCQUFmO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQztZQUN2RCxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDhCQUFVO2lCQUFkO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUN6QixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDhCQUFVO2lCQUFkO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLGlDQUFhO2lCQUFqQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSwrQkFBVztpQkFBZjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSx5Q0FBcUI7aUJBQXpCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDOzs7V0FBQTtRQUNILGFBQUM7SUFBRCxDQXBEQSxBQW9EQyxJQUFBO0lBcERZLHdCQUFNIiwiZmlsZSI6InBlcnNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQZXJzb24ge1xuICBpbmRleDogbnVtYmVyO1xuICBcbiAgZmlyc3ROYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBcbiAgbWlkZGxlSW5pdGlhbDogc3RyaW5nO1xuXG4gIGxhc3ROYW1lOiBzdHJpbmcgPSBcIlwiO1xuXG4gIHNleDogc3RyaW5nID0gXCJcIjtcblxuICBhZ2U6IG51bWJlcjtcblxuICBkb2JNb250aDogbnVtYmVyO1xuXG4gIGRvYkRheTogbnVtYmVyO1xuXG4gIGRvYlllYXI6IG51bWJlcjtcblxuICBvcmlnaW46IHN0cmluZ1tdID0gW107XG5cbiAgcmFjZTogc3RyaW5nW10gPSBbXTtcblxuICBsaXZlZEVsc2V3aGVyZTogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvciAoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldCBpc05hbWVWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWUgIT09IFwiXCIgfHwgdGhpcy5sYXN0TmFtZSAhPT0gXCJcIjtcbiAgfVxuXG4gIGdldCBpc1NleFZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLnNleCAhPT0gXCJcIjtcbiAgfVxuXG4gIGdldCBpc0FnZVZhbGlkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0IGlzT3JpZ2luVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgaXNSYWNlVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgaXNMaXZlZEVsc2V3aGVyZVZhbGlkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('welcome',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Welcome = (function () {
        function Welcome() {
        }
        return Welcome;
    }());
    exports.Welcome = Welcome;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUVBLENBQUM7UUFBRCxjQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSwwQkFBTyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdlbGNvbWUge1xuICBcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('household/index',["require", "exports", "aurelia-framework", "aurelia-router", "../data-store"], function (require, exports, aurelia_framework_1, aurelia_router_1, data_store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Household = (function () {
        function Household(router, dataStore) {
            this.router = router;
            this.dataStore = dataStore;
            this.isSubmitted = false;
            this.question = 1;
        }
        Household.prototype.activate = function (params, routeConfig) {
            this.isSubmitted = false;
            this.question = Number(params.question || 1);
            if (this.question < 1 || this.question > 4) {
                this.question = 1;
            }
            routeConfig.navModel.setTitle('Household');
            return Promise.resolve();
        };
        Object.defineProperty(Household.prototype, "displayError", {
            get: function () {
                return this.isSubmitted && !this.isValid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Household.prototype, "isValid", {
            get: function () {
                switch (this.question) {
                    case 1:
                        return this.dataStore.popCount !== undefined && this.dataStore.popCount > 0;
                    case 2:
                        return this.dataStore.additionalPeople.length > 0;
                    case 3:
                        return this.dataStore.homeOwnership !== "";
                    case 4:
                        return this.dataStore.phoneNumber !== "";
                    default:
                        return false;
                }
            },
            enumerable: true,
            configurable: true
        });
        ;
        Household.prototype.save = function () {
            this.isSubmitted = true;
            if (this.isValid) {
                if (this.question === 4) {
                    this.router.navigateToRoute('demographics');
                }
                else {
                    this.router.navigateToRoute('household', { question: this.question + 1 });
                }
            }
        };
        ;
        return Household;
    }());
    Household = __decorate([
        aurelia_framework_1.inject(aurelia_router_1.Router, data_store_1.DataStore),
        __metadata("design:paramtypes", [aurelia_router_1.Router, data_store_1.DataStore])
    ], Household);
    exports.Household = Household;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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cnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlQ29uZmlnfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge0RhdGFTdG9yZX0gZnJvbSAnLi4vZGF0YS1zdG9yZSc7XG5cbkBpbmplY3QoUm91dGVyLCBEYXRhU3RvcmUpXG5leHBvcnQgY2xhc3MgSG91c2Vob2xkIHtcbiAgaXNTdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBxdWVzdGlvbjogbnVtYmVyID0gMTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRhdGFTdG9yZTogRGF0YVN0b3JlKSB7ICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zOiBhbnksIHJvdXRlQ29uZmlnOiBSb3V0ZUNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5pc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIHRoaXMucXVlc3Rpb24gPSBOdW1iZXIocGFyYW1zLnF1ZXN0aW9uIHx8IDEpO1xuICAgIGlmICh0aGlzLnF1ZXN0aW9uIDwgMSB8fCB0aGlzLnF1ZXN0aW9uID4gNCkge1xuICAgICAgdGhpcy5xdWVzdGlvbiA9IDE7XG4gICAgfVxuXG4gICAgcm91dGVDb25maWcubmF2TW9kZWwuc2V0VGl0bGUoJ0hvdXNlaG9sZCcpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1N1Ym1pdHRlZCAmJiAhdGhpcy5pc1ZhbGlkO1xuICB9XG5cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgc3dpdGNoKHRoaXMucXVlc3Rpb24pIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVN0b3JlLnBvcENvdW50ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5kYXRhU3RvcmUucG9wQ291bnQgPiAwO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU3RvcmUuYWRkaXRpb25hbFBlb3BsZS5sZW5ndGggPiAwO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU3RvcmUuaG9tZU93bmVyc2hpcCAhPT0gXCJcIjtcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVN0b3JlLnBob25lTnVtYmVyICE9PSBcIlwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gICAgXG4gIH07XG5cbiAgc2F2ZSgpIHtcbiAgICB0aGlzLmlzU3VibWl0dGVkID0gdHJ1ZTtcbiAgICBcbiAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICBpZiAodGhpcy5xdWVzdGlvbiA9PT0gNCApIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKCdkZW1vZ3JhcGhpY3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZSgnaG91c2Vob2xkJywge3F1ZXN0aW9uOiB0aGlzLnF1ZXN0aW9uKzF9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('person/index',["require", "exports", "aurelia-framework", "aurelia-router", "../data-store"], function (require, exports, aurelia_framework_1, aurelia_router_1, data_store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DemographicPerson = (function () {
        function DemographicPerson(router, dataStore) {
            this.router = router;
            this.dataStore = dataStore;
            this.isSubmitted = false;
        }
        DemographicPerson.prototype.activate = function (params, routeConfig) {
            var _this = this;
            this.question = params.question || 'name';
            this.index = params.index || 1;
            this.isSubmitted = false;
            return this.dataStore.getPerson(this.index).then(function (person) {
                _this.person = person;
                routeConfig.navModel.setTitle('Person ' + _this.index);
            });
        };
        Object.defineProperty(DemographicPerson.prototype, "displayError", {
            get: function () {
                if (!this.isSubmitted) {
                    return false;
                }
                switch (this.question) {
                    case 'name':
                        return !this.person.isNameValid;
                    case 'sex':
                        return !this.person.isSexValid;
                    case 'age':
                        return !this.person.isAgeValid;
                    case 'origin':
                        return !this.person.isOriginValid;
                    case 'race':
                        return !this.person.isRaceValid;
                    case 'livedElsewhere':
                        return !this.person.isLivedElsewhereValid;
                    default:
                        return true;
                }
            },
            enumerable: true,
            configurable: true
        });
        DemographicPerson.prototype.save = function () {
            this.isSubmitted = true;
            console.log(this.person);
            switch (this.question) {
                case 'name':
                    if (this.person.isNameValid) {
                        this.router.navigateToRoute('person', { index: this.index, question: 'sex' });
                    }
                    break;
                case 'sex':
                    if (this.person.isSexValid) {
                        this.router.navigateToRoute('person', { index: this.index, question: 'age' });
                    }
                    break;
                case 'age':
                    if (this.person.isAgeValid) {
                        this.router.navigateToRoute('person', { index: this.index, question: 'origin' });
                    }
                    break;
                case 'origin':
                    if (this.person.isAgeValid) {
                        this.router.navigateToRoute('person', { index: this.index, question: 'race' });
                    }
                    break;
                case 'race':
                    if (this.person.isAgeValid) {
                        this.router.navigateToRoute('person', { index: this.index, question: 'livedElsewhere' });
                    }
                    break;
                case 'livedElsewhere':
                    if (this.person.isAgeValid) {
                        this.router.navigateToRoute('demographics');
                    }
                    break;
                default:
                    return false;
            }
        };
        return DemographicPerson;
    }());
    DemographicPerson = __decorate([
        aurelia_framework_1.inject(aurelia_router_1.Router, data_store_1.DataStore),
        __metadata("design:paramtypes", [aurelia_router_1.Router, data_store_1.DataStore])
    ], DemographicPerson);
    exports.DemographicPerson = DemographicPerson;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztRQUNILENBQUM7UUFDSCx3QkFBQztJQUFELENBbkZBLEFBbUZDLElBQUE7SUFuRlksaUJBQWlCO1FBRDdCLDBCQUFNLENBQUMsdUJBQU0sRUFBRSxzQkFBUyxDQUFDO3lDQVVJLHVCQUFNLEVBQXFCLHNCQUFTO09BVHJELGlCQUFpQixDQW1GN0I7SUFuRlksOENBQWlCIiwiZmlsZSI6InBlcnNvbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1JvdXRlciwgUm91dGVDb25maWd9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7RGF0YVN0b3JlfSBmcm9tICcuLi9kYXRhLXN0b3JlJztcbmltcG9ydCB7UGVyc29ufSBmcm9tICcuLi9wZXJzb24nO1xuXG5AaW5qZWN0KFJvdXRlciwgRGF0YVN0b3JlKVxuZXhwb3J0IGNsYXNzIERlbW9ncmFwaGljUGVyc29uIHtcbiAgaXNTdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBpbmRleDogbnVtYmVyO1xuXG4gIHBlcnNvbjogUGVyc29uO1xuXG4gIHF1ZXN0aW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkYXRhU3RvcmU6IERhdGFTdG9yZSkgeyAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtczogYW55LCByb3V0ZUNvbmZpZzogUm91dGVDb25maWcpOiBQcm9taXNlPGFueT4ge1xuICAgIHRoaXMucXVlc3Rpb24gPSBwYXJhbXMucXVlc3Rpb24gfHwgJ25hbWUnO1xuICAgIHRoaXMuaW5kZXggPSBwYXJhbXMuaW5kZXggfHwgMTtcbiAgICB0aGlzLmlzU3VibWl0dGVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhU3RvcmUuZ2V0UGVyc29uKHRoaXMuaW5kZXgpLnRoZW4oKHBlcnNvbikgPT4ge1xuICAgICAgdGhpcy5wZXJzb24gPSBwZXJzb247XG4gICAgICByb3V0ZUNvbmZpZy5uYXZNb2RlbC5zZXRUaXRsZSgnUGVyc29uICcgKyB0aGlzLmluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5RXJyb3IoKSB7XG4gICAgaWYgKCF0aGlzLmlzU3VibWl0dGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5xdWVzdGlvbikge1xuICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgIHJldHVybiAhdGhpcy5wZXJzb24uaXNOYW1lVmFsaWQ7XG4gICAgICBjYXNlICdzZXgnOlxuICAgICAgICByZXR1cm4gIXRoaXMucGVyc29uLmlzU2V4VmFsaWQ7XG4gICAgICBjYXNlICdhZ2UnOlxuICAgICAgICByZXR1cm4gIXRoaXMucGVyc29uLmlzQWdlVmFsaWQ7XG4gICAgICBjYXNlICdvcmlnaW4nOlxuICAgICAgICByZXR1cm4gIXRoaXMucGVyc29uLmlzT3JpZ2luVmFsaWQ7XG4gICAgICBjYXNlICdyYWNlJzpcbiAgICAgICAgcmV0dXJuICF0aGlzLnBlcnNvbi5pc1JhY2VWYWxpZDtcbiAgICAgIGNhc2UgJ2xpdmVkRWxzZXdoZXJlJzpcbiAgICAgICAgcmV0dXJuICF0aGlzLnBlcnNvbi5pc0xpdmVkRWxzZXdoZXJlVmFsaWQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzYXZlKCkge1xuICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucGVyc29uKTtcblxuICAgIHN3aXRjaCAodGhpcy5xdWVzdGlvbikge1xuICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgIGlmICh0aGlzLnBlcnNvbi5pc05hbWVWYWxpZCkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZSgncGVyc29uJywge2luZGV4OiB0aGlzLmluZGV4LCBxdWVzdGlvbjogJ3NleCd9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NleCc6XG4gICAgICAgIGlmICh0aGlzLnBlcnNvbi5pc1NleFZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKCdwZXJzb24nLCB7aW5kZXg6IHRoaXMuaW5kZXgsIHF1ZXN0aW9uOiAnYWdlJ30pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYWdlJzpcbiAgICAgICAgaWYgKHRoaXMucGVyc29uLmlzQWdlVmFsaWQpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoJ3BlcnNvbicsIHtpbmRleDogdGhpcy5pbmRleCwgcXVlc3Rpb246ICdvcmlnaW4nfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvcmlnaW4nOlxuICAgICAgICBpZiAodGhpcy5wZXJzb24uaXNBZ2VWYWxpZCkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZSgncGVyc29uJywge2luZGV4OiB0aGlzLmluZGV4LCBxdWVzdGlvbjogJ3JhY2UnfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWNlJzpcbiAgICAgICAgaWYgKHRoaXMucGVyc29uLmlzQWdlVmFsaWQpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoJ3BlcnNvbicsIHtpbmRleDogdGhpcy5pbmRleCwgcXVlc3Rpb246ICdsaXZlZEVsc2V3aGVyZSd9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xpdmVkRWxzZXdoZXJlJzpcbiAgICAgICAgaWYgKHRoaXMucGVyc29uLmlzQWdlVmFsaWQpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoJ2RlbW9ncmFwaGljcycpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!household/household.css', ['module'], function(module) { module.exports = ".household-list label {\n  width: 45rem; }\n"; });
define('text!demographics.html', ['module'], function(module) { module.exports = "<template><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Demographics</h2><p class=\"usa-font-lead\">Please provide information for each person living here. Start with a person living here who owns or rents this house, apartment, or mobile phone. If the owner or renter lives somewhere else, start with any adult living here. This will be Person 1.</p><a class=\"usa-button usa-button-big\" if.bind=\"dataStore.hasNoPeople\" route-href=\"route: person; params.bind: {index: 1, question: 'name'};\">Continue</a><p repeat.for=\"person of dataStore.people\">Person ${person.index}: ${person.firstName} ${person.lastName}</p><a class=\"usa-button usa-button-big\" if.bind=\"!dataStore.hasNoPeople\" route-href=\"route: person; params.bind: {index: dataStore.people.length + 1, question: 'name'};\">Add Person</a> <a class=\"usa-button usa-button-big\" if.bind=\"!dataStore.hasNoPeople\" route-href=\"route: finish\">Finish</a></div></section></template>"; });
define('text!finish.html', ['module'], function(module) { module.exports = "<template><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Thank you for completing your official 2010 Census form.</h2><p class=\"usa-font-lead\">Here's all the data you have entered.</p></div><div class=\"usa-grid\"><h2>Household</h2><p>Number of people: ${dataStore.popCount}</p><p>Additional people: ${dataStore.additionalPeople}</p><p>Home Ownership: ${dataStore.homeOwnership}</p><p>Phone Number: ${dataStore.phoneNumber}</p><h2>People</h2><table><thead><tr><th scope=\"col\">Index</th><th scope=\"col\">Name</th><th scope=\"col\">Sex</th><th scope=\"col\">Age</th><th scope=\"col\">Date of Birth</th><th scope=\"col\">Origin</th><th scope=\"col\">Race</th><th scope=\"col\">Lived Elsewhere</th></tr></thead><tbody><tr repeat.for=\"person of dataStore.people\"><th scope=\"row\">${person.index}</th><td>${person.firstName} ${person.middleInitial} ${person.lastName}</td><td>${person.sex}</td><td>${person.age}</td><td>${person.dobMonth}/${person.dobDay}/${person.dobYear}</td><td>${person.origin}</td><td>${person.race}</td><td>${person.livedElsewhere}</td></tr></tbody></table></div></section></template>"; });
define('text!welcome.html', ['module'], function(module) { module.exports = "<template><section class=\"usa-section\"><div class=\"usa-grid\"><h2>U.S. Census</h2><p class=\"usa-font-lead\">The U.S. Census counts every resident in the United States. It is mandated by Article I, Section 2 of the Constitution and takes place every 10 years. The data collected by the decennial census determine the number of seats each state has in the U.S. House of Representatives and is also used to distribute billions in federal funds to local communities.</p><a class=\"usa-button usa-button-big\" route-href=\"route: household; params.bind: {question: 1};\">Start Questionaire</a></div></section></template>"; });
define('text!household/index.html', ['module'], function(module) { module.exports = "<template><compose view=\"./question-${question}.html\" model.bind=\"$this\"></compose></template>"; });
define('text!household/question-1.html', ['module'], function(module) { module.exports = "<template><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Question 1</h2><p class=\"usa-font-lead\">How many people were living or staying in this house, apartment, or mobile home on April 1, 2010?</p><form class=\"usa-form\"><div class=\"${!displayError ? '' : 'usa-input-error'}\"><label for=\"popcount\" class=\"${!displayError ? '' : 'usa-input-error-label'}\">Number of people</label><span class=\"usa-input-error-message\" role=\"alert\" id=\"popcount-message\" if.bind=\"displayError\">Please provide a positive number</span> <input class=\"usa-input-required\" id=\"popcount\" name=\"popcount\" type=\"number\" required=\"\" aria-required=\"true\" aria-describedby=\"popcount-message\" value.bind=\"dataStore.popCount\"></div><input type=\"submit\" value=\"Next\" click.delegate=\"save()\" class=\"usa-button-primary\"></form></div></section></template>"; });
define('text!household/question-2.html', ['module'], function(module) { module.exports = "<template><require from=\"./household.css\"></require><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Question 2</h2><p class=\"usa-font-lead\">Were there any additional people staying here April 1, 2010 that you did not include in Question 1?</p><form class=\"usa-form\"><div class=\"${!displayError ? '' : 'usa-input-error'}\"><fieldset class=\"usa-fieldset-inputs usa-sans\"><legend class=\"usa-sr-only\">Mark all that apply</legend><span class=\"usa-input-error-message\" role=\"alert\" id=\"additionalPeople-message\" if.bind=\"displayError\">Mark all that apply</span><ul class=\"usa-unstyled-list household-list\"><li><input id=\"children\" type=\"checkbox\" name=\"additionalPeople\" value=\"children\" checked.bind=\"dataStore.additionalPeople\"><label for=\"children\">Children, such as newborn babies or foster children</label></li><li><input id=\"relatives\" type=\"checkbox\" name=\"additionalPeople\" value=\"relatives\" checked.bind=\"dataStore.additionalPeople\"><label for=\"relatives\">Relatives, such as adult children, cousins, or in-laws</label></li><li><input id=\"nonrelatives\" type=\"checkbox\" name=\"additionalPeople\" value=\"nonrelatives\" checked.bind=\"dataStore.additionalPeople\"><label for=\"nonrelatives\">Nonrelatives, such as roommates or live-in baby sitters</label></li><li><input id=\"tempPeople\" type=\"checkbox\" name=\"additionalPeople\" value=\"tempPeople\" checked.bind=\"dataStore.additionalPeople\"><label for=\"tempPeople\">People staying here temporarily</label></li><li><input id=\"none\" type=\"checkbox\" name=\"additionalPeople\" value=\"none\" checked.bind=\"dataStore.additionalPeople\"><label for=\"none\">No additional people</label></li></ul></fieldset></div><input type=\"submit\" value=\"Next\" click.delegate=\"save()\" class=\"usa-button-primary\"></form></div></section></template>"; });
define('text!household/question-3.html', ['module'], function(module) { module.exports = "<template><require from=\"./household.css\"></require><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Question 3</h2><p class=\"usa-font-lead\">Is this house, apartment, or mobile home —</p><form class=\"usa-form\"><div class=\"${!displayError ? '' : 'usa-input-error'}\"><fieldset class=\"usa-fieldset-inputs usa-sans\"><legend class=\"usa-sr-only\">Mark ONE box</legend><span class=\"usa-input-error-message\" role=\"alert\" id=\"homeOwnership-message\" if.bind=\"displayError\">Mark ONE box</span><ul class=\"usa-unstyled-list household-list\"><li><input id=\"loaned\" type=\"radio\" name=\"homeOwnership\" value=\"loaned\" checked.bind=\"dataStore.homeOwnership\"><label for=\"loaned\">Owned by you or someone in this household with a mortgage or load? Include home equity loans.</label></li><li><input id=\"owned\" type=\"radio\" name=\"homeOwnership\" value=\"owned\" checked.bind=\"dataStore.homeOwnership\"><label for=\"owned\">Owned by you or someone in this household free and clear (without a mortgage or load)?</label></li><li><input id=\"rented\" type=\"radio\" name=\"homeOwnership\" value=\"rented\" checked.bind=\"dataStore.homeOwnership\"><label for=\"rented\">Rented?</label></li><li><input id=\"occupied\" type=\"radio\" name=\"homeOwnership\" value=\"occupied\" checked.bind=\"dataStore.homeOwnership\"><label for=\"occupied\">Occupied without payment or rent?</label></li></ul></fieldset></div><input type=\"submit\" value=\"Next\" click.delegate=\"save()\" class=\"usa-button-primary\"></form></div></section></template>"; });
define('text!household/question-4.html', ['module'], function(module) { module.exports = "<template><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Question 4</h2><form class=\"usa-form\"><fieldset><legend>What is your telephone number?</legend><span class=\"usa-form-hint\" id=\"phoneNumberHint\">We may call if we don't understand an answer.</span><div class=\"${!displayError ? '' : 'usa-input-error'}\"><label for=\"phoneNumber\" class=\"${!displayError ? '' : 'usa-input-error-label'}\">Area Code + Number</label><span class=\"usa-input-error-message\" role=\"alert\" id=\"phoneNumber-message\" if.bind=\"displayError\">Please provide a phone number</span> <input class=\"usa-input-inline usa-form-control\" aria-describedby=\"phoneNumberHint\" id=\"phoneNumber\" name=\"phoneNumber\" type=\"tel\" pattern=\"[0-9]{10}\" value.bind=\"dataStore.phoneNumber\"></div></fieldset><input type=\"submit\" value=\"Next\" click.delegate=\"save()\" class=\"usa-button-primary\"></form></div></section></template>"; });
define('text!person/index.html', ['module'], function(module) { module.exports = "<template><compose view=\"./question-${question}.html\" model.bind=\"this.person\"></compose></template>"; });
define('text!person/question-age.html', ['module'], function(module) { module.exports = "<template><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Person ${index}</h2><p class=\"usa-font-lead\">What is Person ${index}'s age?</p><form class=\"usa-form\"><div class=\"${!displayError ? '' : 'usa-input-error'}\"><label for=\"age\" class=\"${!displayError ? '' : 'usa-input-error-label'}\">Age on April 1, 2010</label><span class=\"usa-input-error-message\" role=\"alert\" id=\"age-message\" if.bind=\"displayError\">Please provide an abort.trigger=\"\"</span> <input class=\"usa-input-required\" id=\"age\" name=\"age\" type=\"number\" required=\"\" aria-required=\"true\" aria-describedby=\"age-message\" value.bind=\"person.age\"><fieldset><legend>Date of birth</legend><span class=\"usa-form-hint\" id=\"dobHint\">For example: 04 28 1986</span><div class=\"usa-date-of-birth\"><div class=\"usa-form-group usa-form-group-month\"><label for=\"date_of_birth_1\">Month</label><input class=\"usa-input-inline\" aria-describedby=\"dobHint\" class=\"usa-form-control\" id=\"date_of_birth_1\" name=\"date_of_birth_1\" pattern=\"0?[1-9]|1[012]\" type=\"number\" min=\"1\" max=\"12\" value.bind=\"person.dobMonth\"></div><div class=\"usa-form-group usa-form-group-day\"><label for=\"date_of_birth_2\">Day</label><input class=\"usa-input-inline\" aria-describedby=\"dobHint\" class=\"usa-form-control\" id=\"date_of_birth_2\" name=\"date_of_birth_2\" pattern=\"0?[1-9]|1[0-9]|2[0-9]|3[01]\" type=\"number\" min=\"1\" max=\"31\" value.bind=\"person.dobDay\"></div><div class=\"usa-form-group usa-form-group-year\"><label for=\"date_of_birth_3\">Year</label><input class=\"usa-input-inline\" aria-describedby=\"dobHint\" class=\"usa-form-control\" id=\"date_of_birth_3\" name=\"date_of_birth_3\" pattern=\"[0-9]{4}\" type=\"number\" min=\"1900\" max=\"2000\" value.bind=\"person.dobYear\"></div></div></fieldset></div><input type=\"submit\" value=\"Next\" click.delegate=\"save()\" class=\"usa-button-primary\"></form></div></section></template>"; });
define('text!person/question-livedElsewhere.html', ['module'], function(module) { module.exports = "<template><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Person ${index}</h2><p class=\"usa-font-lead\">Does Person ${index} sometimes live or stay somewhere else?</p><form class=\"usa-form\"><div class=\"${!displayError ? '' : 'usa-input-error'}\"><fieldset class=\"usa-fieldset-inputs usa-sans\"><legend class=\"usa-sr-only\">Mark one or more boxes</legend><span class=\"usa-input-error-message\" role=\"alert\" id=\"livedElsewhere-message\" if.bind=\"displayError\">Mark one or more boxes</span><ul class=\"usa-unstyled-list origin-list\"><li><input id=\"no\" type=\"checkbox\" name=\"livedElsewhere\" value=\"no\" checked.bind=\"person.livedElsewhere\"><label for=\"no\">No</label></li><li><input id=\"college\" type=\"checkbox\" name=\"livedElsewhere\" value=\"college\" checked.bind=\"person.livedElsewhere\"><label for=\"college\">In college housing/label></label></li><li><input id=\"military\" type=\"checkbox\" name=\"livedElsewhere\" value=\"military\" checked.bind=\"person.livedElsewhere\"><label for=\"military\">In the military</label></li><li><input id=\"seasonal\" type=\"checkbox\" name=\"livedElsewhere\" value=\"seasonal\" checked.bind=\"person.livedElsewhere\"><label for=\"seasonal\">At a seasonal or second residence</label></li><li><input id=\"custody\" type=\"checkbox\" name=\"livedElsewhere\" value=\"custody\" checked.bind=\"person.livedElsewhere\"><label for=\"custody\">For child custody</label></li><li><input id=\"prison\" type=\"checkbox\" name=\"livedElsewhere\" value=\"prison\" checked.bind=\"person.livedElsewhere\"><label for=\"prison\">In jail or prison</label></li><li><input id=\"nursing\" type=\"checkbox\" name=\"livedElsewhere\" value=\"nursing\" checked.bind=\"person.livedElsewhere\"><label for=\"nursing\">In a nursing home</label></li><li><input id=\"other\" type=\"checkbox\" name=\"livedElsewhere\" value=\"other\" checked.bind=\"person.livedElsewhere\"><label for=\"other\">For another reason</label></li></ul></fieldset></div><input type=\"submit\" value=\"Next\" click.delegate=\"save()\" class=\"usa-button-primary\"></form></div></section></template>"; });
define('text!person/question-name.html', ['module'], function(module) { module.exports = "<template><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Person ${index}</h2><p class=\"usa-font-lead\">What is Person ${index}'s name?</p><form class=\"usa-form\"><div class=\"${!displayError ? '' : 'usa-input-error'}\"><fieldset><label for=\"firstName\" class=\"usa-input-required ${!displayError ? '' : 'usa-input-error-label'}\">First name</label><span class=\"usa-input-error-message\" role=\"alert\" id=\"popcount-message\" if.bind=\"displayError\">Please provide a positive number</span> <input id=\"firstName\" name=\"firstName\" type=\"text\" required=\"\" aria-required=\"true\" value.bind=\"person.firstName\"><label for=\"middleInitial\" class=\"${!displayError ? '' : 'usa-input-error-label'}\">Middle initial</label><input id=\"middleInitial\" name=\"middleInitial\" type=\"text\" length=\"1\" value.bind=\"person.middleInitial\"><label for=\"lastName\" class=\"usa-input-required ${!displayError ? '' : 'usa-input-error-label'}\">Last name</label><span class=\"usa-input-error-message\" role=\"alert\" id=\"popcount-message\" if.bind=\"displayError\">Please provide a positive number</span> <input id=\"lastName\" name=\"lastName\" type=\"text\" required=\"\" aria-required=\"true\" value.bind=\"person.lastName\"></fieldset></div><input type=\"submit\" value=\"Next\" click.delegate=\"save()\" class=\"usa-button-primary\"></form></div></section></template>"; });
define('text!person/question-origin.html', ['module'], function(module) { module.exports = "<template><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Person ${index}</h2><p class=\"usa-font-lead\">Is Person ${index} of Hispanic, Latino, or Spanish origin?</p><form class=\"usa-form\"><div class=\"${!displayError ? '' : 'usa-input-error'}\"><fieldset class=\"usa-fieldset-inputs usa-sans\"><legend class=\"usa-sr-only\">Mark all that apply</legend><span class=\"usa-input-error-message\" role=\"alert\" id=\"origin-message\" if.bind=\"displayError\">Mark all that apply</span><ul class=\"usa-unstyled-list origin-list\"><li><input id=\"no\" type=\"checkbox\" name=\"origin\" value=\"no\" checked.bind=\"person.origin\"><label for=\"no\">No, not of Hispanic, Latino, or Spanish origin</label></li><li><input id=\"mexican\" type=\"checkbox\" name=\"origin\" value=\"mexican\" checked.bind=\"person.origin\"><label for=\"mexican\">Yes, Mexican, Mexian Am., Chicano</label></li><li><input id=\"puertorican\" type=\"checkbox\" name=\"origin\" value=\"puertorican\" checked.bind=\"person.origin\"><label for=\"puertorican\">Yes, Puerto Rican</label></li><li><input id=\"cuban\" type=\"checkbox\" name=\"origin\" value=\"cuban\" checked.bind=\"person.origin\"><label for=\"cuban\">Yes, Cuban</label></li><li><input id=\"other\" type=\"checkbox\" name=\"origin\" value=\"other\" checked.bind=\"person.origin\"><label for=\"other\">Yes, another Hispanic, Latino, or Spanish origin</label></li></ul></fieldset><div if.bind=\"person.origin.indexOf('other') !== -1\"><label for=\"otherOrigin\" class=\"${!displayError ? '' : 'usa-input-error-label'}\">Print origin, for example, Argentinian, Columbian, Dominican, Nicaraguan, Salvadoran, Spaniard, and so on.</label><input class=\"usa-input-required\" id=\"otherOrigin\" name=\"otherOrigin\" type=\"text\" required=\"\" aria-required=\"true\" aria-describedby=\"origin-message\" value.bind=\"person.origin\"></div></div><input type=\"submit\" value=\"Next\" click.delegate=\"save()\" class=\"usa-button-primary\"></form></div></section></template>"; });
define('text!person/question-race.html', ['module'], function(module) { module.exports = "<template><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Person ${index}</h2><p class=\"usa-font-lead\">What is Person ${index} race?</p><form class=\"usa-form\"><div class=\"${!displayError ? '' : 'usa-input-error'}\"><fieldset class=\"usa-fieldset-inputs usa-sans\"><legend class=\"usa-sr-only\">Mark one or more boxes</legend><span class=\"usa-input-error-message\" role=\"alert\" id=\"race-message\" if.bind=\"displayError\">Mark one or more boxes</span><ul class=\"usa-unstyled-list origin-list\"><li><input id=\"white\" type=\"checkbox\" name=\"race\" value=\"white\" checked.bind=\"person.race\"><label for=\"white\">White</label></li><li><input id=\"black\" type=\"checkbox\" name=\"race\" value=\"black\" checked.bind=\"person.race\"><label for=\"black\">Black, African Am., or Negro</label></li><li><input id=\"native\" type=\"checkbox\" name=\"race\" value=\"native\" checked.bind=\"person.race\"><label for=\"native\">American Indian or Alaska Native</label></li><li><input id=\"indian\" type=\"checkbox\" name=\"race\" value=\"indian\" checked.bind=\"person.race\"><label for=\"asian\">Asian Indian</label></li><li><input id=\"chinese\" type=\"checkbox\" name=\"race\" value=\"chinese\" checked.bind=\"person.race\"><label for=\"chinese\">Chinese</label></li><li><input id=\"filipino\" type=\"checkbox\" name=\"race\" value=\"filipino\" checked.bind=\"person.race\"><label for=\"filipino\">Filipino</label></li><li><input id=\"japanese\" type=\"checkbox\" name=\"race\" value=\"japanese\" checked.bind=\"person.race\"><label for=\"japanese\">Japanese</label></li><li><input id=\"korean\" type=\"checkbox\" name=\"race\" value=\"korean\" checked.bind=\"person.race\"><label for=\"korean\">Korean</label></li><li><input id=\"vietnamese\" type=\"checkbox\" name=\"race\" value=\"vietnamese\" checked.bind=\"person.race\"><label for=\"vietnamese\">Vietnamese</label></li><li><input id=\"hawaiian\" type=\"checkbox\" name=\"race\" value=\"hawaiian\" checked.bind=\"person.race\"><label for=\"hawaiian\">Native Hawaiian</label></li><li><input id=\"guamanian\" type=\"checkbox\" name=\"race\" value=\"guamanian\" checked.bind=\"person.race\"><label for=\"guamanian\">Guamanian or Chamorro</label></li><li><input id=\"samoan\" type=\"checkbox\" name=\"race\" value=\"samoan\" checked.bind=\"person.race\"><label for=\"samoan\">Samoan</label></li><li><input id=\"islander\" type=\"checkbox\" name=\"race\" value=\"islander\" checked.bind=\"person.race\"><label for=\"islander\">Other Pacific Islander</label></li><li><input id=\"asian\" type=\"checkbox\" name=\"race\" value=\"asian\" checked.bind=\"person.race\"><label for=\"asian\">Other Asian</label></li><li><input id=\"other\" type=\"checkbox\" name=\"race\" value=\"other\" checked.bind=\"person.race\"><label for=\"other\">Some other race</label></li></ul></fieldset><div if.bind=\"person.race.indexOf('other') !== -1\"><label for=\"otherRace\" class=\"${!displayError ? '' : 'usa-input-error-label'}\">Print race.</label><input class=\"usa-input-required\" id=\"otherRace\" name=\"otherRace\" type=\"text\" required=\"\" aria-required=\"true\" aria-describedby=\"race-message\" value.bind=\"person.race\"></div></div><input type=\"submit\" value=\"Next\" click.delegate=\"save()\" class=\"usa-button-primary\"></form></div></section></template>"; });
define('text!person/question-sex.html', ['module'], function(module) { module.exports = "<template><section class=\"usa-section\"><div class=\"usa-grid\"><h2>Person ${index}</h2><p class=\"usa-font-lead\">What is Person ${index}'s sex?</p><form class=\"usa-form\"><div class=\"${!displayError ? '' : 'usa-input-error'}\"><fieldset class=\"usa-fieldset-inputs usa-sans\"><legend class=\"usa-sr-only\">Mark ONE box</legend><span class=\"usa-input-error-message\" role=\"alert\" id=\"homeOwnership-message\" if.bind=\"displayError\">Mark ONE box</span><ul class=\"usa-unstyled-list household-list\"><li><input id=\"male\" type=\"radio\" name=\"sex\" value=\"male\" checked.bind=\"person.sex\"><label for=\"male\">Male</label></li><li><input id=\"female\" type=\"radio\" name=\"sex\" value=\"female\" checked.bind=\"person.sex\"><label for=\"female\">Female</label></li></ul></fieldset></div><input type=\"submit\" value=\"Next\" click.delegate=\"save()\" class=\"usa-button-primary\"></form></div></section></template>"; });
//# sourceMappingURL=app-bundle.js.map