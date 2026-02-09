interface ContactForm {
  firstName: string
  lastName: string
  email: string
  message: string
}

export function useContactForm() {
  const config = useRuntimeConfig()

  const form = reactive<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const errorMessage = ref('')

  async function handleSubmit() {
    isSubmitting.value = true
    errorMessage.value = ''

    try {
      await $fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: {
          access_key: config.public.web3formsKey,
          'first-name': form.firstName,
          'last-name': form.lastName,
          email: form.email,
          subject: form.message,
        },
      })
      isSuccess.value = true
      form.firstName = ''
      form.lastName = ''
      form.email = ''
      form.message = ''
    }
    catch {
      errorMessage.value = 'Something went wrong. Please try again.'
    }
    finally {
      isSubmitting.value = false
    }
  }

  return { form, isSubmitting, isSuccess, errorMessage, handleSubmit }
}
