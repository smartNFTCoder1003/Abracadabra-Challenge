<script>
  export default {
    name: 'NetworksModalComp',
    data () {
      return {
        networks: [
          {img: 'https://abracadabra.money/img/ethereum-icon.979b3b3b.svg', name: 'ETH'},
          {img: 'https://abracadabra.money/img/binance-icon.a873ddca.svg', name: 'BSC'},
          {img: 'https://abracadabra.money/img/fantom-icon.29a61e77.svg', name: 'FTM'},
          {img: 'https://abracadabra.money/img/avalanche-icon.b2914932.png', name: 'AVAX'},
          {img: 'https://abracadabra.money/img/arbitrum-icon.3bac5866.svg', name: 'AETH'},
          {img: 'https://abracadabra.money/img/polygon-icon.e1079701.svg', name: 'MATIC'}
        ]
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-networks">
      <div class="modal-popup"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header-search"
          id="modalTitle"
        >
            <div class="d-flex justify-content-between">
                <slot name="header">
                    <small>Select Networks</small>
                </slot>
                <button
                    type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal"
                >
                    <i class="fa fa-times" aria-hidden="true"></i>
                </button>
            </div>
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <div class="row mt-4">
              <div class="col-md-6 mt-2" v-for="(network, index) in networks" v-bind:key="index">
                <button class="btn btn-network-item">
                  <img :src="network.img" alt="" width="25" height="25">
                  {{network.name}}
                </button>
              </div>
            </div>
          </slot>
        </section>

      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import '../scss/color';

  .modal-networks {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

        .modal-popup {
            background: #FFFFFF;
            box-shadow: 2px 2px 20px 1px;
            overflow-x: auto;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            background-color: $bg_default;
            padding: 1rem;
            max-width: 380px;
            height: 350px;

            .modal-header-search {
                position: relative;
                border-bottom: 1px solid gray;
                padding: 15px 0px;

                input {
                    outline: none;
                    background-color: $bg_hover;
                    color: white;
                    height: 50px;
                    border-radius: 5px;
                    padding-left: 5px;
                    font-size: 16px;
                    border: 1px solid gray;
                }
            }

            .modal-body {
                position: relative;
                padding: 0px 10px;
                overflow: hidden;
                overflow-y: auto;

                .btn-network-item {
                  border-color: gray;
                  width: 100%;
                  color: white;
                  padding: 10px;
                }

                .btn-network-item.actived {
                  border-color: white;
                  background-color: $bg_hover;
                  color: $purple;
                }

                .btn-network-item:hover {
                  border-color: white;
                  background-color: $bg_hover;
                  color: $purple;

                  img {
                    transition: 0.3s linear;
                    --tw-scale-x: 0.9;
                    --tw-scale-y: 0.9;
                    transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
                  }
                }

            }

            .modal-body::-webkit-scrollbar {
                width: 4px;
                height: 4px;
            }

            .modal-body::-webkit-scrollbar-thumb {
                border-width: 1px 1px 1px 2px;
                border-radius: 2px;
                background-color: #252423;
            }

            .modal-body::-webkit-scrollbar-track {
                border-width: 1px;
                background-color: #414141;
                border-color: transparent;
            }

            .btn-close {
                position: absolute;
                top: 0;
                right: 0;
                border: none;
                font-size: 20px;
                padding: 10px;
                cursor: pointer;
                font-weight: bold;
                color: gray;
                background: transparent;
            }

            .modal-fade-enter,
            .modal-fade-leave-to {
                opacity: 0;
            }

            .modal-fade-enter-active,
            .modal-fade-leave-active {
                transition: opacity .5s ease;
            }
        }
  }

  
</style>