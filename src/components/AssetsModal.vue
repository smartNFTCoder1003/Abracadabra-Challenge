<script>
  export default {
    name: 'AssetsModalComp',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-select-coin">
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
                    <small>Select Cauldron</small>
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
            <div class="mt-4">
                <input type="text" placeholder="Search">
            </div>
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <div class="coin-items">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-2">
                        <img src="https://abracadabra.money/img/BNB.fd0cb0d3.png" alt="" width="30">
                        WBNB
                        <small class="text-gray">2%</small>
                    </div>
                    <small>0.0</small>
                </div>
            </div>
            <div class="coin-items">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-2">
                        <img src="https://abracadabra.money/img/CAKE.e3c4b4a4.png" alt="" width="30">
                        Cake
                        <small class="text-gray">3%</small>
                    </div>
                    <small>0.0</small>
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

  .modal-select-coin {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

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
            height: 550px;

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
                    width: 100%;
                    border: 1px solid gray;
                }
            }

            .modal-body {
                position: relative;
                padding: 0px 10px;
                overflow: hidden;
                overflow-y: auto;

                .coin-items {
                    padding: 1rem;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: 0.3s linear;
                }

                .coin-items:hover {
                    background-color: $bg_hover;
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