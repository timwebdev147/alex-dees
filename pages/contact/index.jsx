import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/contact.module.scss'





function Contact(params) {

    const fields = [
        {
          name: 'name*',
          type: 'text',
          placeholder: 'Enter your name'
        },
        {
          name: 'address',
          type: 'text',
          placeholder: 'Enter your address'
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Enter your email',
          class: 'half_width'
        },
        {
          name: 'phone*',
          type: 'text',
          placeholder: 'Enter your phone number',
          class: 'half_width'
        },
        {
          name: 'subject',
          type: 'text',
          placeholder: 'Type the subject'
        },
        {
          name: 'message',
          type: 'textarea',
          placeholder: 'Type your message here...'
        }
      ]

    return(
        <>
            <Head>
                <title>Alex D's Cleaning Services</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconAlex.ico" />
            </Head>
            <div >
                <Navbar/>
            </div>

            <div className={styles.form_container}>
                <div className={styles.bg_container}></div>
                <div className={styles.form_container}>
                    <div>

                        <div>
                            <h2>
                            Get a Free Quote Now!
                            </h2>
                            <div>
                            <p>Humble, texas</p>
                            <a href="mailto:alexdscleaning@gmail.com">alexdscleaning@gmail.com</a>
                            <a href="tel:+12392343355">(239)-234-3355</a>
                            </div>
                        </div>
                    
                        <form action="">
                            {
                            fields.map((field) => (
                                <div className={styles[field.class]}>
                                    <label htmlFor="">{field.name}</label>
                                {
                                field.type == 'text' || field.type == 'email' ?
                                <input type={field.type} placeholder={field.placeholder} />: 
                                <textarea placeholder={field.placeholder} ></textarea>
                                }
                                </div>
                            ))
                            }

                            <button>submit</button>
                        </form>
                        <div className={styles.contact}>
                        <p>Humble, texas</p>
                        <a href="mailto:alexdscleaning@gmail.com">alexdscleaning@gmail.com</a>
                        <a href="tel:+12392343355">(239)-234-3355</a>
                        </div>

                    </div>
                </div>
            </div>


            <div className={styles.nav_container}>
        <Link href='/'>home</Link>
        <Link href='/services'>services</Link>
        <Link href='/recent-work'>testimonials</Link>
        <Link href='/contact'>contact us</Link>
      </div>

      <footer className={styles.footer}>
        <div>
          <h1><Link href={'/'}>Alex D's Cleaning Service LLC</Link></h1>

          <div>
          <a href="mailto:alexdscleaning@gmail.com">alexdscleaning@gmail.com</a>
          <a href="tel:+12392343355">(239)-234-3355</a>
          </div>

          <p>©2023 by Alex D's Cleaning Service LLC.</p>
        </div>
      </footer>
        </>
    )
    
}


export default Contact;