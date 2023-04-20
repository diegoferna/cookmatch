import React, { useEffect } from "react"
import { Recipe } from "../../../api/useRecipes"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

type Props = {
  recipe: Recipe
  triggerOpenModal: boolean
  handleChangeModalState(): void
}

export default function DetailsModal({ recipe, triggerOpenModal, handleChangeModalState }: Props) {
  let [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if(triggerOpenModal) setIsOpen(true)
  }, [triggerOpenModal])

  function closeModal() {
    setIsOpen(false)
    handleChangeModalState()
  }

  return (
    <section>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {recipe.title}
                  </Dialog.Title>
                  <div className="mt-2 flex flex-row gap-4 justify-between">
                  <img src={recipe.img} />
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis non quaerat incidunt veniam in ut magnam quae suscipit eaque possimus. Doloribus, architecto odit nemo eligendi deserunt itaque ipsa ullam minima.</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  )
}
