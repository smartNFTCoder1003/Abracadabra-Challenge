<template>
    <div class="header">
        <div class="nav-logo d-flex justify-content-start">
            <router-link to="/">
                <img src="../assets/magic-crystal.5955921e.png" alt="Not found" width="50" />
            </router-link>
            
        </div>
        <div class="header-router d-flex justify-content-center">
            <div class="nav-bar d-flex align-items-center">
                <router-link to="/"><template v-if="!isCollapse"><div class="actived">Borrow</div></template></router-link>
                <router-link to="/leverage"><template v-if="!isCollapse"><div>Leverage</div></template></router-link>
                <router-link to="/positions"><template v-if="!isCollapse"><div>Positions</div></template></router-link>
                <router-link to="/"><template v-if="!isCollapse"><div>Stake</div></template></router-link>
                <router-link to="/"><template v-if="!isCollapse"><div>Tool</div></template></router-link>
                <button @click="collapsehandle">
                    <template v-if="!isCollapse">
                        <i class="fa fa-hand-o-left" aria-hidden="true"></i>
                    </template>
                    <template v-else>
                        <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                    </template>
                </button>
            </div>
        </div>
        <div class="nav-toolbar d-flex justify-content-end gap-2">
            <button class="btn select-network d-flex justify-content align-items-center" @click="showNewworksModal">
                <img src="https://abracadabra.money/img/binance-icon.a873ddca.svg" alt="Not found" width="30">
            </button>
            <button class="btn btn-connect">Connect Wallet</button>
            <button class="btn d-flex justify-content-center align-items-center"><img src="https://abracadabra.money/img/points.92131986.svg" alt="Not fount" width="30"/></button>
        </div>
        <NewworksModalVue 
            v-show="isNetworksModalVisible"
            @close="closeNewworksModal"
        />
    </div>
</template>

<script>
import '../scss/header.scss'
import NewworksModalVue from './NewworksModal.vue';

export default {
    name: 'HeaderComp',
    components: {
        NewworksModalVue,
    },
    data() {
      return {
        isNetworksModalVisible: false,
        isCollapse: false,
      };
    },
    methods: {
      showNewworksModal() {
        this.isNetworksModalVisible = true;
      },
      closeNewworksModal() {
        this.isNetworksModalVisible = false;
      },
      collapsehandle() {
        if (window.innerWidth < 1260) {
            this.isCollapse = !this.isCollapse;
        }
      }
    }
}
</script>