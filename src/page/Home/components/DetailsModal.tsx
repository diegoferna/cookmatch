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
                <Dialog.Panel className="w-full max-h-96 max-w-4xl overflow-auto rounded-2xl bg-white shadow-gray-light shadow-sm border border-r-orange border-b-orange border-l-green border-t-green p-6 text-left align-middle transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {recipe.title}
                  </Dialog.Title>
                  <div className="mt-8 flex flex-row gap-4 justify-between">
                    <img className="rounded-full object-contain" src={recipe.img} />
                    <div>
                      <section className="flex flex-col gap-2">
                        <h2 className="font-bold">Descrição:</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis non quaerat incidunt veniam in ut magnam quae suscipit eaque possimus. Doloribus, architecto odit nemo eligendi deserunt itaque ipsa ullam minima.</p>
                      </section>
                      <section className="mt-4 flex flex-col gap-2">
                        <h2 className="font-bold">Ingredientes: </h2>
                        <ul>
                          {recipe.ingredientLines?.map((ingredientLines) => (
                            <li>{ingredientLines}</li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-2">
                    <h2 className="font-bold">Modo de Preparo:</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse amet sint aperiam doloribus. Voluptas atque blanditiis, rem vitae explicabo, quibusdam eius, veniam sit voluptate ad esse nulla nobis maiores autem!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse amet sint aperiam doloribus. Voluptas atque blanditiis, rem vitae explicabo, quibusdam eius, veniam sit voluptate ad esse nulla nobis maiores autem!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse amet sint aperiam doloribus. Voluptas atque blanditiis, rem vitae explicabo, quibusdam eius, veniam sit voluptate ad esse nulla nobis maiores autem!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse amet sint aperiam doloribus. Voluptas atque blanditiis, rem vitae explicabo, quibusdam eius, veniam sit voluptate ad esse nulla nobis maiores autem!</p>

                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="border rounded-md p-2 hover:bg-green hover:text-white"
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
